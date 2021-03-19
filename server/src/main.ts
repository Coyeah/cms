import "reflect-metadata";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import initApolloServer from "./construct/initApolloServer";
import initConnection from "./construct/initConnection";

const PORT = 3001;

async function bootstrap() {
  // 初始化 orm
  await initConnection();

  const app = express();

  // utils
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(cors());  // 全局允许跨域

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
