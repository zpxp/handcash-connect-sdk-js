export = HandCashApiP2PInterceptor;
declare class HandCashApiP2PInterceptor {
    p2pReferences: {};
    nextOwner(handCashConnectService: any): Promise<any>;
    sign(handCashConnectService: any, rawTransaction: any, inputParents: any, locks: any): Promise<any>;
    broadcast(handCashConnectService: any, rawTx: any): Promise<void>;
    _getP2PReferences(rawTx: any): any;
    _deleteUsedAddresses(usedAddresses: any): void;
}
