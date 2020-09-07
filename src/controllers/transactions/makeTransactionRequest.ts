import { Router } from 'express';
import { getRates, makeTransaction } from '../../utils';
import { ContextStrategy } from '../../db';

const makeTransactionRequest = (router: Router, context: ContextStrategy) => {
  const monetaryUnitList = ['GBP', 'BRL', 'JPY', 'EUR', 'USD'];
  const { log } = console;
  router.post('/', async (req: any, res: any, next: any) => {
    try {
      const { userId, monetaryUnitSrc, monetaryUnitDest, valueSrc } = req.body;
      const conversionRates = await getRates(monetaryUnitSrc);
      log(conversionRates);
      // if (res.status === 200) {
      // if (!userId) return new Error('Request has no given userId');
      // if (makeTransaction()) {
      // }
      // } else {
      //   return new Error('Request Error');
      // }
      next('Bádi');
    } catch (error) {
      next(error);
    }
  });
};

export default makeTransactionRequest;
