export = HttpRequestFactory;
declare class HttpRequestFactory {
    static _getEncodedEndpoint(endpoint: any, queryParameters: any): any;
    static _getRequestSignature(method: any, endpoint: any, serializedBody: any, timestamp: any, privateKey: any): any;
    static _getRequestSignaturePayload(method: any, endpoint: any, serializedBody: any, timestamp: any): string;
    constructor({ authToken, appSecret, baseApiEndpoint }: {
        authToken: any;
        appSecret: any;
        baseApiEndpoint: any;
    });
    authToken: any;
    appSecret: any;
    baseApiEndpoint: any;
    _getSignedRequest(method: any, endpoint: any, body?: {}, queryParameters?: boolean): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getCurrentProfileRequest(): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getPublicProfilesByHandleRequest(aliases: any): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getUserFriendsRequest(): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getUserPermissionsRequest(): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getEncryptionKeypairRequest(encryptionPublicKey: any): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getDataSignatureRequest(dataSignatureParameters: any): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getSpendableBalanceRequest(currencyCode: any): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getTotalBalanceRequest(): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getPayRequest(paymentParameters: any): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getPaymentRequest(queryParameters: any): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getExchangeRateRequest(currencyCode: any): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getPursePayRequest(rawTransaction: any, inputParents: any): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getPurseBroadcastP2PRequest(rawTransaction: any, p2pTokens: any): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getOwnerNextP2PAddressRequest(): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getOwnerSignP2PRequest(rawTransaction: any, inputParents: any, locks: any, p2pTokens: any): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
    getNftLocationsRequest(): {
        baseURL: any;
        url: any;
        method: any;
        headers: {
            'oauth-publickey': any;
            'oauth-signature': any;
            'oauth-timestamp': string;
            'app-secret': any;
        };
        data: string;
        responseType: string;
    };
}
