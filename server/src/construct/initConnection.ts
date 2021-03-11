import { Container, Token } from 'typedi';
import { Connection, createConnection } from 'typeorm';
import { mongo } from '../config';

export const ConnectionToken = new Token<Connection>();

export default async function () {
    const connection = await createConnection(mongo);
    Container.set(ConnectionToken, connection);
}



