const { Transaction } = require('bsv');

class HandCashApiP2PInterceptor {
   constructor() {
      this.p2pReferences = {};
   }

   async nextOwner(handCashConnectService) {
      const data = await handCashConnectService.ownerNextP2PAddress();
      const address = data.ownerAddress;
      this.p2pReferences[address] = {
         p2pToken: data.p2pToken,
         createdAt: new Date(),
      };
      return address;
   }

   async sign(handCashConnectService, rawTransaction, inputParents, locks) {
      const { p2pTokens } = this._getP2PReferences(rawTransaction);
      const data = await handCashConnectService.ownerSignP2P(rawTransaction, inputParents, locks, p2pTokens);
      return data.signedTransaction;
   }

   async broadcast(handCashConnectService, rawTx) {
      const {
         usedAddresses,
         p2pTokens,
      } = this._getP2PReferences(rawTx);
      await handCashConnectService.purseBroadcastP2P(rawTx, p2pTokens);
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
}

module.exports.instance = new HandCashApiP2PInterceptor();
