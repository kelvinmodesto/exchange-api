import { Router } from 'express';
import { getRates, makeTransaction } from '../../utils';
import { ContextStrategy } from '../../db';

const makeTransactionRequest = (router: Router, context: ContextStrategy) => {
  const monetaryUnitList = ['GBP', 'BRL', 'JPY', 'EUR', 'USD'];
  router.post('/', async (req: any, res: any, next: any) => {
    try {
      const { userId, monetaryUnitSrc, monetaryUnitDest, srcValue } = req.query;
      const conversionRate = await getRates(monetaryUnitSrc, monetaryUnitDest);
      if (res.statusCode === 200) {
        if (!userId) throw new Error('Request has no given userId');
        if (!srcValue) throw new Error('Request has no given value to convert');
        if (monetaryUnitList.indexOf(monetaryUnitSrc) === -1) {
          throw new Error('Request source monetary unit is not valid');
        }
        if (monetaryUnitList.indexOf(monetaryUnitDest) === -1) {
          throw new Error('Request destiny monetary unit is not valid');
        }
        const {
          dataValues: { transactionId, createdAt },
        } = await context.create({
          userId,
          conversionRate,
          srcValue,
          monetaryUnitSrc,
          monetaryUnitDest,
        });
        if (makeTransaction()) {
          const destValue = (srcValue * conversionRate).toFixed(2);
          await context.update(
            {
              destValue,
              transactionIsSucceeded: true,
            },
            { where: { transactionId } }
          );
          res.send({
            transactionId,
            userId,
            createdAt,
            conversionRate,
            srcValue,
            monetaryUnitSrc,
            monetaryUnitDest,
            destValue,
          });
        } else {
          res.send({
            userId,
            createdAt,
            conversionRate,
            srcValue,
            monetaryUnitSrc,
            monetaryUnitDest,
          });
        }
      } else {
        throw new Error('Request Error');
      }
    } catch (error) {
      next(error);
    }
  });
};

export default makeTransactionRequest;
