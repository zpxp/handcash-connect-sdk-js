const Environments = require('../environments');
const HandCashConnectService = require('../api/handcash_connect_service');
const HttpRequestFactory = require('../api/http_request_factory');

module.exports = class HandCashOwner {
   constructor(handCashConnectService, handCashApiP2PInterceptor) {
      this.handCashConnectService = handCashConnectService;
      this.handCashApiP2PInterceptor = handCashApiP2PInterceptor;
   }

   static fromCredentials({
      authToken,
      appSecret,
      env = Environments.prod,
   }) {
      const handCashConnectService = new HandCashConnectService(
         new HttpRequestFactory(
            {
               authToken,
               appSecret,
               baseApiEndpoint: env.apiEndpoint,
            },
         ),
      );
      return new HandCashOwner(handCashConnectService);
   }

   async nextOwner() {
      return this.handCashApiP2PInterceptor.nextOwner(this.handCashConnectService);
   }

   async sign(rawTransaction, inputParents, locks) {
      return this.handCashApiP2PInterceptor.sign(this.handCashConnectService, rawTransaction, inputParents, locks);
   }

   async getNftLocations() {
      const data = await this.handCashConnectService.getNftLocations();
      return data.nftLocations;
   }
};
