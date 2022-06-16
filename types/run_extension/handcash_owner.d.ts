export = HandCashOwner;
declare class HandCashOwner {
    constructor(handCashConnectService: any);
    handCashConnectService: any;
    nextOwner(): Promise<any>;
    sign(rawTransaction: any, inputParents: any, locks: any): Promise<any>;
    getNftLocations(): Promise<any>;
}
