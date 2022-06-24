const { KeyPair, PrivKey, PubKey, Ecies } = require('bsv');

class Profile {
   constructor(handCashConnectService) {
      this.handCashConnectService = handCashConnectService;
   }

   async getCurrentProfile() {
      return this.handCashConnectService.getCurrentProfile();
   }

   async getPublicProfilesByHandle(handles) {
      return this.handCashConnectService.getPublicProfilesByHandle(handles)
         .then(result => result.items);
   }

   async getFriends() {
      return this.handCashConnectService.getUserFriends()
         .then(result => result.items);
   }

   async getPermissions() {
      return this.handCashConnectService.getUserPermissions()
         .then(result => result.items);
   }

   async getEncryptionKeypair() {
      const privateKey = PrivKey.fromRandom();
      const pubKey = PubKey.fromPrivKey(privateKey);
      const encryptedKeypair = await this.handCashConnectService.getEncryptionKeypair(
         pubKey.toString(),
      );
      return {
         publicKey: Ecies.electrumEncrypt(Buffer.from(encryptedKeypair.encryptedPublicKeyHex, 'hex'),
			    pubKey, KeyPair.fromPrivKey(privateKey))
            .toString(),
         privateKey: Ecies.electrumEncrypt(Buffer.from(encryptedKeypair.encryptedPrivateKeyHex, 'hex'),
			    pubKey, KeyPair.fromPrivKey(privateKey))
            .toString()
      };
   }

   async signData(dataSignatureParameters) {
      return this.handCashConnectService.signData(dataSignatureParameters);
   }
}

module.exports = Profile;
