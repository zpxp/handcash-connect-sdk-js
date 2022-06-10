export = HandCashApiP2PInterceptor;
declare class HandCashApiP2PInterceptor {
    static fromCredentials({ authToken, appSecret, baseApiEndpoint, }: {
        authToken: any;
        appSecret: any;
        baseApiEndpoint: any;
    }): import("./handcash_api_p2p_interceptor");
    constructor(handCashConnectService: any);
    handCashConnectService: any;
    p2pReferences: {};
    nextOwner(alias: any): Promise<any>;
    sign(rawTransaction: any, inputParents: any, locks: any): Promise<any>;
    getNftLocations(): Promise<any>;
    pay(rawTx: any, parents: any): Promise<any>;
    broadcast(rawTx: any): Promise<void>;
    _getP2PReferences(rawTx: any): any;
    _deleteUsedAddresses(usedAddresses: any): void;
}
