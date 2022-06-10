export = HandCashPurse;
declare class HandCashPurse {
    constructor(handCashApiP2PInterceptor: any);
    handCashApiP2PInterceptor: any;
    pay(rawTx: any, parents: any): Promise<any>;
    broadcast(rawTx: any): Promise<any>;
}
