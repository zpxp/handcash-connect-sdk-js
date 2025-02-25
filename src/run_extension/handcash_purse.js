const HandCashConnectService = require('../api/handcash_connect_service');
const HttpRequestFactory = require('../api/http_request_factory');
const Environments = require('../environments');

module.exports = class HandCashPurse {
   constructor(handCashConnectService) {
      this.handCashConnectService = handCashConnectService;
   }

   static fromAuthToken(authToken,
      /* istanbul ignore next */ env = Environments.prod,
      /* istanbul ignore next */ appSecret = '') {
      const handCashConnectService = new HandCashConnectService(
         new HttpRequestFactory(
            authToken,
            env.apiEndpoint,
            appSecret,
         ),
      );
      return new HandCashPurse(handCashConnectService);
   }

   async pay(rawTx, parents) {
      const res = await this.handCashConnectService.pursePay(rawTx, parents);
      return res.partiallySignedTx;
   }

   async broadcast(rawTx) {
      await this.handCashConnectService.purseBroadcast(rawTx);
   }
};
