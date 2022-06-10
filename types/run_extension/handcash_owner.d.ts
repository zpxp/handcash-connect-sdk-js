export = HandCashOwner;
declare class HandCashOwner {
    constructor(handCashApiP2PInterceptor: any);
    handCashApiP2PInterceptor: any;
    nextOwner(): Promise<any>;
    sign(rawTransaction: any, inputParents: any, locks: any): Promise<any>;
    getNftLocations(): Promise<any>;
}
