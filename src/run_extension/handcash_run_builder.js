const Run = require('run-sdk');
const Environments = require('../environments');
const HandCashApiP2PInterceptor = require('./handcash_api_p2p_interceptor');
const HandCashPurse = require('./handcash_purse');
const HandCashOwner = require('./handcash_owner');

module.exports = class HandCashRunBuilder {
   constructor(owner, purse) {
      this.owner = owner;
      this.purse = purse;
      this.customRunComponents = {};
   }

   static fromCredentials({
      authToken,
      appSecret,
      env = Environments.prod,
   }) {
      const handCashApiP2PInterceptor = HandCashApiP2PInterceptor.fromCredentials({
         authToken,
         appSecret,
         baseApiEndpoint: env.apiEndpoint,
      });
      const owner = new HandCashOwner(handCashApiP2PInterceptor);
      const purse = new HandCashPurse(handCashApiP2PInterceptor);
      return new HandCashRunBuilder(owner, purse);
   }

   setCustomRunComponents(components) {
      if ('owner' in components) {
         throw new Error('HandCashRun uses its own Owner component. You cannot override this component.');
      }
      if ('purse' in components) {
         throw new Error('HandCashRun uses its own Purse component. You cannot override this component.');
      }
      this.customRunComponents = components;
      return this;
   }

   build() {
      const run = new Run({
         owner: this.owner,
         purse: this.purse,
         ...this.customRunComponents,
      });
      run.activate();
      return run;
   }
};
