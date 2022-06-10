const { Transaction } = require('bsv');
const HandCashConnectService = require('../api/handcash_connect_service');
const HttpRequestFactory = require('../api/http_request_factory');

module.exports = class HandCashApiP2PInterceptor {
   constructor(handCashConnectService) {
      this.handCashConnectService = handCashConnectService;
      this.p2pReferences = {};
   }

   static fromCredentials({
      authToken,
      appSecret,
      baseApiEndpoint,
   }) {
      const handCashConnectService = new HandCashConnectService(
         new HttpRequestFactory(
            {
               authToken,
               baseApiEndpoint,
               appSecret,
            },
         ),
      );
      return new HandCashApiP2PInterceptor(handCashConnectService);
   }

   async nextOwner(alias) {
      const data = await this.handCashConnectService.ownerNextP2PAddress(alias);
      const address = data.ownerAddress;
      this.p2pReferences[address] = {
         p2pToken: data.p2pToken,
         createdAt: new Date(),
      };
      return address;
   }

   async sign(rawTransaction, inputParents, locks) {
      const { p2pTokens } = this._getP2PReferences(rawTransaction);
      const data = await this.handCashConnectService.ownerSignP2P(rawTransaction, inputParents, locks, p2pTokens);
      return data.signedTransaction;
   }

   async getNftLocations() {
      const data = await this.handCashConnectService.getNftLocations();
      return data.nftLocations;
   }

   async pay(rawTx, parents) {
      const data = await this.handCashConnectService.pursePay(rawTx, parents);
      return data.partiallySignedTx;
   }

   async broadcast(rawTx) {
      const {
         usedAddresses,
         p2pTokens,
      } = this._getP2PReferences(rawTx);
      await this.handCashConnectService.purseBroadcastP2P(rawTx, p2pTokens);
      this._deleteUsedAddresses(usedAddresses);
   }

   _getP2PReferences(rawTx) {
      const transaction = new Transaction(rawTx);
      return transaction.outputs.reduce(((previousValue, output) => {
         const address = output.script.toAddress();
         if (address && address in this.p2pReferences) {
            return [...previousValue, this.p2pReferences[address].p2pToken];
         }
         return previousValue;
      }), {
         usedAddresses: [],
         p2pTokens: [],
      });
   }

   _deleteUsedAddresses(usedAddresses) {
      usedAddresses.forEach(address => delete this.p2pReferences[address]);
   }
};
