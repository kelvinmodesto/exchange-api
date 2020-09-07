import { Router } from 'express';
import { ContextStrategy } from '../../db';

const getTransactionsByUsers = (router: Router, context: ContextStrategy) => {
  router.get('/', async (req: any, res: any, next: any) => {
    try {
      const { userId } = req.query;
      if (res.statusCode === 200) {
        if (!userId) throw new Error('Request has no given userId');
        const transactionsDataList = await context.read({ where: { userId } });
        const transactionsFilteredDataList = transactionsDataList.filter(
          (it: any) => it.dataValues.transactionIsSucceeded
        );
        const dataValuesList = transactionsFilteredDataList.map(
          (it: any) => it.dataValues
        );
        res.send(dataValuesList);
      } else {
        throw new Error('Request Error');
      }
    } catch (error) {
      next(error);
    }
  });
};

export default getTransactionsByUsers;
