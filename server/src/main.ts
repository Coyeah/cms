import 'reflect-metadata';
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

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

  // apollo-server-express
  const apolloServer = await initApolloServer();
  apolloServer.applyMiddleware({ app });

  app.get("/ok", function (req: Request, res: Response) {
    res.send("ok");
  });

  app.listen(PORT, () => {
    console.log(`Running app listening at http://localhost:${PORT}`);
    console.log(`GraphQL Playground: http://localhost:${PORT}/graphql`)
  });

}

bootstrap();
