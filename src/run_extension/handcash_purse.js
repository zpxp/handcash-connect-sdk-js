const HandCashConnectService = require('../api/handcash_connect_service');
const HttpRequestFactory = require('../api/http_request_factory');
const Environments = require('../environments');

module.exports = class HandCashPurse {
   constructor(handCashApiP2PInterceptor) {
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
      return new HandCashPurse(handCashConnectService);
   }

   async pay(rawTx, parents) {
      return this.handCashApiP2PInterceptor.pay(rawTx, parents);
   }

   async broadcast(rawTx) {
      return this.handCashApiP2PInterceptor.broadcast(rawTx);
   }
};
