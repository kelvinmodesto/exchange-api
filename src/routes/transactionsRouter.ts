import { Router } from 'express';

import { ContextStrategy, SQLiteStrategy } from '../db';
import { getTransactionsByUsers, makeTransactionRequest } from '../controllers';
import { defineTransactionModel } from '../models';

const transactionsRouter = () => {
  const connection = SQLiteStrategy.connect();
  const model = defineTransactionModel(SQLiteStrategy.connection);
  const context = new ContextStrategy(new SQLiteStrategy(connection, model));
  const router = Router();
  getTransactionsByUsers(router, context);
  makeTransactionRequest(router, context);

  return router;
};

export default transactionsRouter;
