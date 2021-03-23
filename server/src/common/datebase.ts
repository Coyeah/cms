import {
    ConnectionOptions as MongooseConnectionOptions,
    connect,
} from "mongoose";

export interface ConnectionOptions extends MongooseConnectionOptions {
    uri: string;
}

export const conf: { [key: string]: ConnectionOptions } = {
    development: {
        uri: "mongodb://127.0.0.1/",
        dbName: "cms",
        // user: 'admin',
        // pass: '123456',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
};

export const db = async (config: ConnectionOptions = conf["development"]) => {
    const { uri, ...rest } = config;
    await connect(uri, rest);
};
