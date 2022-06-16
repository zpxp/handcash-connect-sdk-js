export type Environment = {
   apiEndpoint: string;
   clientUrl: string;
};

export const Environments: {
   iae: Environment,
   beta: Environment,
   prod: Environment,
};

export type AppCredentials = {
   appId: string,
   appSecret: string,
   env?: Environment,
};

export type AccountCredentials = {
   authToken: string,
   appSecret: string,
   env?: Environment,
};

export type ApiCredentials = {
   authToken: string,
   appSecret: string,
   baseApiEndpoint: string,
};

export class HandCashConnect {
   appId: string;

   appSecret: string;

   env: Environment;

   constructor(params: AppCredentials);

   getRedirectionUrl(queryParameters?: {
      [key: string]: string;
   }): string;

   getChangeSpendLimitsUrl(redirectUrl?: string | boolean): string;

   getAccountFromAuthToken(authToken: string): HandCashCloudAccount;
}

export class HandCashConnectApiError extends Error {
   httpStatusCode: number;

   info: any;

   constructor(httpStatusCode: number, message: string, info: any);

   toString(): string;
}

export const Permissions: {
   Pay: string;
   UserPublicProfile: string;
   UserPrivateProfile: string;
   Friends: string;
   Decryption: string;
   SignData: string;
   ReadBalance: string;
};

export interface UserPublicProfile {
   id: string;
   handle: string;
   paymail: string;
   displayName: string;
   avatarUrl: string;
   localCurrencyCode: string;
   bitcoinUnit: string;
   createdAt: string;
}

export interface UserPrivateProfile {
   phoneNumber: string;
   email: string;
}

export interface UserProfile {
   publicProfile: UserPublicProfile;
   privateProfile: UserPrivateProfile;
}

export interface EncryptionKeypair {
   privateKey: string;
   publicKey: string;
}

export interface DataSignature {
   publicKey: string;
   signature: string;
}

export interface DataSignatureParameters {
   value: string;
   format: 'hex' | 'base64' | 'utf-8';
}

export class Profile {
   handCashConnectService: HandCashConnectService;

   constructor(handCashConnectService: HandCashConnectService);

   getCurrentProfile(): Promise<UserProfile>;

   getPublicProfilesByHandle(handles: string[]): Promise<UserPublicProfile[]>;

   getFriends(): Promise<UserPublicProfile[]>;

   getPermissions(): Promise<string[]>;

   getEncryptionKeypair(): Promise<EncryptionKeypair>;

   signData(dataSignatureParameters: DataSignatureParameters): Promise<DataSignature>;
}

export interface SpendableBalance {
   spendableSatoshiBalance: number;
   spendableFiatBalance: number;
   currencyCode: string;
}

export interface UserBalance {
   satoshiBalance: number;
   fiatBalance: number;
   currencyCode: string;
}

export interface PaymentRequestItem {
   destination: string;
   currencyCode: string;
   sendAmount: number;
   tags: [];
}

export interface TransactionParticipant {
   type: string;
   alias: string;
   displayName: number;
   profilePictureUrl: string;
   tags: string[];
}

export interface Attachment {
   value: string;
   format: 'base64' | 'hex' | 'json';
}

export interface PaymentResult {
   transactionId: string;
   note: string;
   appAction: string;
   time: number;
   type: string;
   satoshiFees: number;
   satoshiAmount: number;
   fiatExchangeRate: number;
   fiatCurrencyCode: string;
   participants: TransactionParticipant[];
   attachments: Attachment[];
}

export interface ExchangeRate {
   fiatSymbol: string;
   rate: number;
   exchangeRateVersion: string;
   estimatedExpireDate: string;
}

export interface PaymentParameters {
   description?: string;
   appAction?: string;
   payments: PaymentRequestItem[];
   attachment?: Attachment;
}

export type CurrencyCode =
   'AED'
   | 'AFN'
   | 'ALL'
   | 'AMD'
   | 'ANG'
   | 'AOA'
   | 'ARS'
   | 'AUD'
   | 'AWG'
   | 'AZN'
   | 'BAM'
   | 'BBD'
   | 'BDT'
   | 'BGN'
   | 'BHD'
   | 'BIF'
   | 'BMD'
   | 'BND'
   | 'BOB'
   | 'BOV'
   | 'BRL'
   | 'BSD'
   | 'BTN'
   | 'BWP'
   | 'BYN'
   | 'BZD'
   | 'CAD'
   | 'CDF'
   | 'CHE'
   | 'CHF'
   | 'CHW'
   | 'CLF'
   | 'CLP'
   | 'CNY'
   | 'COP'
   | 'COU'
   | 'CRC'
   | 'CUC'
   | 'CUP'
   | 'CVE'
   | 'CZK'
   | 'DJF'
   | 'DKK'
   | 'DOP'
   | 'DZD'
   | 'EGP'
   | 'ERN'
   | 'ETB'
   | 'EUR'
   | 'FJD'
   | 'FKP'
   | 'GBP'
   | 'GEL'
   | 'GHS'
   | 'GIP'
   | 'GMD'
   | 'GNF'
   | 'GTQ'
   | 'GYD'
   | 'HKD'
   | 'HNL'
   | 'HRK'
   | 'HTG'
   | 'HUF'
   | 'IDR'
   | 'ILS'
   | 'INR'
   | 'IQD'
   | 'IRR'
   | 'ISK'
   | 'JMD'
   | 'JOD'
   | 'JPY'
   | 'KES'
   | 'KGS'
   | 'KHR'
   | 'KMF'
   | 'KPW'
   | 'KRW'
   | 'KWD'
   | 'KYD'
   | 'KZT'
   | 'LAK'
   | 'LBP'
   | 'LKR'
   | 'LRD'
   | 'LSL'
   | 'LYD'
   | 'MAD'
   | 'MDL'
   | 'MGA'
   | 'MKD'
   | 'MMK'
   | 'MNT'
   | 'MOP'
   | 'MRU'
   | 'MUR'
   | 'MVR'
   | 'MWK'
   | 'MXN'
   | 'MXV'
   | 'MYR'
   | 'MZN'
   | 'NAD'
   | 'NGN'
   | 'NIO'
   | 'NOK'
   | 'NPR'
   | 'NZD'
   | 'OMR'
   | 'PAB'
   | 'PEN'
   | 'PGK'
   | 'PHP'
   | 'PKR'
   | 'PLN'
   | 'PYG'
   | 'QAR'
   | 'RON'
   | 'RSD'
   | 'RUB'
   | 'RWF'
   | 'SAR'
   | 'SBD'
   | 'SCR'
   | 'SDG'
   | 'SEK'
   | 'SGD'
   | 'SHP'
   | 'SLL'
   | 'SOS'
   | 'SRD'
   | 'SSP'
   | 'STN'
   | 'SVC'
   | 'SYP'
   | 'SZL'
   | 'THB'
   | 'TJS'
   | 'TMT'
   | 'TND'
   | 'TOP'
   | 'TRY'
   | 'TTD'
   | 'TWD'
   | 'TZS'
   | 'UAH'
   | 'UGX'
   | 'USD'
   | 'USN'
   | 'UYI'
   | 'UYU'
   | 'UYW'
   | 'UZS'
   | 'VES'
   | 'VND'
   | 'VUV'
   | 'WST'
   | 'XAF'
   | 'XAG'
   | 'XAU'
   | 'XBA'
   | 'XBB'
   | 'XBC'
   | 'XBD'
   | 'XCD'
   | 'XDR'
   | 'XOF'
   | 'XPD'
   | 'XPF'
   | 'XPT'
   | 'XSU'
   | 'XTS'
   | 'XUA'
   | 'XXX'
   | 'YER'
   | 'ZAR'
   | 'ZMW'
   | 'ZWL';

export class Wallet {
   handCashConnectService: HandCashConnectService;

   constructor(handCashConnectService: HandCashConnectService);

   getTotalBalance(): Promise<UserBalance>;

   getSpendableBalance(currencyCode?: CurrencyCode): Promise<SpendableBalance>;

   pay(paymentParameters: PaymentParameters): Promise<PaymentResult>;

   getPayment(transactionId: string): Promise<PaymentResult>;

   getExchangeRate(currencyCode: CurrencyCode): Promise<ExchangeRate>;
}

interface HttpSignedRequest {
   baseURL: string;
   url: string;
   method: string;
   headers: {
      'oauth-publickey': string;
      'oauth-signature': string;
      'oauth-timestamp': string;
      'app-secret': string;
   };
   data: string;
   responseType: string;
}

declare class HttpRequestFactory {
   authToken: string;

   baseApiEndpoint: string;

   appSecret: string;

   constructor(credentials: ApiCredentials);

   _getHttpSignedRequest(method: string, endpoint: string, body?: any, queryParameters?: any): HttpSignedRequest;

   static _getEncodedEndpoint(endpoint: string, queryParameters: any): string;

   static _getRequestSignature(method: string, endpoint: string, serializedBody: string, timestamp: string, privateKey: any): string;

   static _getRequestSignaturePayload(method: string, endpoint: string, serializedBody: string, timestamp: string): string;

   getCurrentProfileRequest(): HttpSignedRequest;

   getPublicProfilesByHandleRequest(aliases: string[]): HttpSignedRequest;

   getUserFriendsRequest(): HttpSignedRequest;

   getUserPermissionsRequest(): HttpSignedRequest;

   getEncryptionKeypairRequest(encryptionPublicKey: string): HttpSignedRequest;

   getDataSignatureRequest(dataSignatureParameters: DataSignatureParameters): HttpSignedRequest;

   getSpendableBalanceRequest(currencyCode: CurrencyCode): HttpSignedRequest;

   getTotalBalanceRequest(): HttpSignedRequest;

   getPayRequest(paymentParameters: PaymentParameters): HttpSignedRequest;

   getPaymentRequest(queryParameters: {
      transactionId: string;
   }): HttpSignedRequest;

   getExchangeRateRequest(currencyCode: CurrencyCode): HttpSignedRequest;

   getPursePayRequest(rawTransaction: string, inputParents: any[]): HttpSignedRequest;

   getPurseBroadcastP2PRequest(rawTransaction: string, p2pTokens: string[]): HttpSignedRequest;

   getOwnerNextP2PAddressRequest(): HttpSignedRequest;

   getOwnerSignP2PRequest(rawTransaction: string, inputParents: any[], locks: any[], p2pTokens: string[]): HttpSignedRequest;

   getNftLocationsRequest(): HttpSignedRequest;
}

declare class HandCashConnectService {
   httpRequestFactory: HttpRequestFactory;

   constructor(httpRequestFactory: HttpRequestFactory);

   getCurrentProfile(): Promise<UserProfile>;

   getPublicProfilesByHandle(handles: string[]): Promise<any>;

   getUserPermissions(): Promise<any>;

   getEncryptionKeypair(encryptionPublicKey: string): Promise<any>;

   signData(dataSignatureParameters: DataSignatureParameters): Promise<any>;

   getUserFriends(): Promise<any>;

   getSpendableBalance(currencyCode: CurrencyCode): Promise<SpendableBalance>;

   pay(paymentParameters: any): Promise<any>;

   getPayment(transactionId: string): Promise<PaymentResult>;

   getExchangeRate(currencyCode: CurrencyCode): Promise<ExchangeRate>;

   pursePay(rawTransaction: string, parents: any[]): Promise<any>;

   purseBroadcastP2P(rawTransaction: string, p2pTokens: string[]): Promise<any>;

   ownerNextP2PAddress(): Promise<any>;

   ownerSignP2P(rawTransaction: string, inputParents: any[], locks: any[], p2pTokens: string[]): Promise<any>;

   getNftLocations(): Promise<any>;

   static handleRequest(requestParameters: any): Promise<any>;

   static handleApiError(errorResponse: any): Promise<never>;
}

export class HandCashCloudAccount {
   wallet: Wallet;

   profile: Profile;

   constructor(wallet: Wallet, profile: Profile);

   static fromCredentials(credentials: ApiCredentials): HandCashCloudAccount;
}

export class HandCashApiP2PInterceptor {
   p2pReferences: object;

   constructor();

   nextOwner(handCashConnectService: HandCashConnectService): Promise<string>;

   sign(handCashConnectService: HandCashConnectService, rawTransaction: string, inputParents: any[], locks: any[]): Promise<string>;

   broadcast(handCashConnectService: HandCashConnectService, rawTx: string): Promise<any>;
}

export class HandCashPurse {
   handCashConnectService: HandCashConnectService;
   handCashApiP2PInterceptor: HandCashApiP2PInterceptor;

   constructor(handCashConnectService: HandCashConnectService, handCashApiP2PInterceptor: HandCashApiP2PInterceptor);

   static fromCredentials(credentials: AccountCredentials): HandCashPurse;

   pay(rawTx: string, parents: any[]): Promise<any>;

   broadcast(rawTx: string): Promise<any>;
}

export class HandCashOwner {
   handCashConnectService: HandCashConnectService;
   handCashApiP2PInterceptor: HandCashApiP2PInterceptor;

   constructor(handCashConnectService: HandCashConnectService, handCashApiP2PInterceptor: HandCashApiP2PInterceptor);

   static fromCredentials(credentials: AccountCredentials): HandCashOwner;

   nextOwner(): Promise<string>;

   sign(rawTransaction: string, inputParents: any[], locks: any[]): Promise<string>;

   getNftLocations(): Promise<string[]>;
}
