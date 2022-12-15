import express from 'express'
import router from './routes/transactions.routes.js';

const app = express();

app.use(express.json()); //Give us access to the request body 

app.use(router);

export default app