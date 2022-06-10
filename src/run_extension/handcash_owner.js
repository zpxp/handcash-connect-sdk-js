module.exports = class HandCashOwner {
   constructor(handCashApiP2PInterceptor) {
      this.handCashApiP2PInterceptor = handCashApiP2PInterceptor;
   }

   async nextOwner() {
      return this.handCashApiP2PInterceptor.nextOwner();
   }

   async sign(rawTransaction, inputParents, locks) {
      return this.handCashApiP2PInterceptor.sign(rawTransaction, inputParents, locks);
   }

   async getNftLocations() {
      return this.handCashApiP2PInterceptor.getNftLocations();
   }
};
