import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import apolloServer from './construct/apolloServer';

const app = express();
const PORT = 3001;

// apollo-server-express
apolloServer.applyMiddleware({ app });

// utils
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/ok", function (req, res) {
    res.send("ok");
});

app.listen(PORT, () => {
    console.log(`Running app listening at http://localhost:${PORT}`);
});
