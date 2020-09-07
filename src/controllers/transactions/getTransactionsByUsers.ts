import { Router } from 'express';
import { config } from 'dotenv';
import { ContextStrategy, SQLiteStrategy } from '../../db';

const getTransactionsByUsers = (router: Router, context: ContextStrategy) => {
  const monetaryUnitList = ['GBP', 'BRL', 'JPY', 'EUR', 'USD'];
  config();
  const { log, error } = console;
  router.get('/', async (req: any, res: any, next: any) => {
    try {
      context.isConnected();
      log('Successfully');
    } catch (err) {
      error('teste error');
    }
  });
};

export default getTransactionsByUsers;
