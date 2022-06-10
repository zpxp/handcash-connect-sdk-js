const HandCashConnectService = require('./api/handcash_connect_service');
const HttpRequestFactory = require('./api/http_request_factory');
const Wallet = require('./wallet');
const Profile = require('./profile');

class HandCashCloudAccount {
   constructor(wallet, profile) {
      this.wallet = wallet;
      this.profile = profile;
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
               appSecret,
               baseApiEndpoint,
            },
         ),
      );
      const wallet = new Wallet(handCashConnectService);
      const profile = new Profile(handCashConnectService);
      return new HandCashCloudAccount(wallet, profile);
   }
}

module.exports = HandCashCloudAccount;
