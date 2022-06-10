module.exports = class HandCashPurse {
   constructor(handCashApiP2PInterceptor) {
      this.handCashApiP2PInterceptor = handCashApiP2PInterceptor;
   }

   async pay(rawTx, parents) {
      return this.handCashApiP2PInterceptor.pay(rawTx, parents);
   }

   async broadcast(rawTx) {
      return this.handCashApiP2PInterceptor.broadcast(rawTx);
   }
};
