import { ConnectionOptions } from 'typeorm';
import path from 'path';

const conf: ConnectionOptions = {
    type: 'mongodb',
    host: '127.0.0.1',
    port: 27017,
    database: 'cms',
    entities: [path.resolve(__dirname, '../model/*.entity') + '{.ts,.js}'],
    logging: true,
    maxQueryExecutionTime: 5000,
    useUnifiedTopology: true,
    synchronize: true,
}

export default conf;