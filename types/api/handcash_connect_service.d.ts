export = HandCashConnectService;
declare class HandCashConnectService {
    static handleRequest(requestParameters: any): Promise<any>;
    static handleApiError(errorResponse: any): Promise<never>;
    constructor(httpRequestFactory: any);
    httpRequestFactory: any;
    getCurrentProfile(): Promise<any>;
    getPublicProfilesByHandle(handles: any): Promise<any>;
    getUserPermissions(): Promise<any>;
    getEncryptionKeypair(encryptionPublicKey: any): Promise<any>;
    signData(dataSignatureParameters: any): Promise<any>;
    getUserFriends(): Promise<any>;
    getSpendableBalance(currencyCode: any): Promise<any>;
    getTotalBalance(): Promise<any>;
    pay(paymentParameters: any): Promise<any>;
    getPayment(transactionId: any): Promise<any>;
    getExchangeRate(currencyCode: any): Promise<any>;
    pursePay(rawTransaction: any, parents: any): Promise<any>;
    purseBroadcastP2P(rawTransaction: any, p2pTokens: any): Promise<any>;
    ownerNextP2PAddress(): Promise<any>;
    ownerSignP2P(rawTransaction: any, inputParents: any, locks: any, p2pTokens: any): Promise<any>;
    getNftLocations(): Promise<any>;
}
