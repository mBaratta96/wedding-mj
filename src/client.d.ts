interface ImportMetaEnv {
    readonly PAYPAL_CLIENT_ID;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
