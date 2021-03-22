import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import initApolloServer from './common/apolloServer';
import { db } from './common/datebase';

const PORT = 3001;

async function bootstrap() {

    // connection mongodb
    await db().then(() => {
        console.log(`Mongoose's connection succeed`)
    });

    const app = express();

    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(cors());

    // apollo-server-express
    const apolloServer = await initApolloServer();
    apolloServer.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`Running app listening at: http://localhost:${PORT}`);
        console.log(
            `GraphQL Playground available at: http://localhost:${PORT}/graphql`
        );
    });
}

bootstrap();