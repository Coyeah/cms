import {
    ConnectionOptions as MongooseConnectionOptions,
    connect,
    Connection
} from "mongoose";

export let connection: Connection;

export interface ConnectionOptions extends MongooseConnectionOptions {
    uri?: string;
}

export const conf: ConnectionOptions = {
    uri: "mongodb://127.0.0.1/",
    dbName: 'cms',
    // user: 'admin',
    // pass: '123456',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

export const db = async (config: ConnectionOptions = conf): Promise<Connection> => {
    const { uri, ...rest } = config;
    if (!uri) return Promise.reject();
    await connect(uri, rest);
}