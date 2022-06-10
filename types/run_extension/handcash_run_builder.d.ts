export = HandCashRunBuilder;
declare class HandCashRunBuilder {
    static fromCredentials({ authToken, appSecret, env, }: {
        authToken: any;
        appSecret: any;
        env?: {
            apiEndpoint: string;
            clientUrl: string;
        };
    }): import("./handcash_run_builder");
    constructor(owner: any, purse: any);
    owner: any;
    purse: any;
    customRunComponents: {};
    setCustomRunComponents(components: any): import("./handcash_run_builder");
    build(): any;
}
