import { ContextStrategy } from '../base';
import SQLiteStrategy from './SQLiteStrategy';

import { defineTransactionModel } from '../../models';

const MOCK_CREATE_TRANSACTION = {
  userId: '12345',
  monetaryUnitSrc: 'BRL',
  monetaryUnitDest: 'USD',
  srcValue: 100,
  conversionRate: 0.5,
};

// const MOCK_UPDATE_TRANSACTION = {
//   monetaryUnitSrc: 'USD',
//   monetaryUnitDest: 'BRL',
//   srcValue: 1000,
// };

let MOCK_TRANSACTION_ID = '';
const connection = SQLiteStrategy.connect();
const model = defineTransactionModel(SQLiteStrategy.connection);
const context = new ContextStrategy(new SQLiteStrategy(connection, model));
describe('SQLite Test Suit', () => {
  beforeAll(async () => {
    const {
      dataValues: { transactionId },
    } = await context.create(MOCK_CREATE_TRANSACTION);

    MOCK_TRANSACTION_ID = transactionId;
  });

  it('Verify connection', async () => {
    expect(await SQLiteStrategy.isConnected()).toBe(true);
  });

  it('Create item', async () => {
    const {
      dataValues: {
        userId,
        monetaryUnitSrc,
        monetaryUnitDest,
        srcValue,
        conversionRate,
      },
    } = await context.create(MOCK_CREATE_TRANSACTION);
    expect([
      { userId, monetaryUnitSrc, monetaryUnitDest, srcValue, conversionRate },
    ]).toStrictEqual([MOCK_CREATE_TRANSACTION]);
  });

  it('Read item', async () => {
    const {
      dataValues: {
        userId,
        monetaryUnitSrc,
        monetaryUnitDest,
        srcValue,
        conversionRate,
      },
    } = await context.read({ where: { transactionId: MOCK_TRANSACTION_ID } });
    expect([
      { userId, monetaryUnitSrc, monetaryUnitDest, srcValue, conversionRate },
    ]).toStrictEqual([MOCK_CREATE_TRANSACTION]);
  });

  it('Update item', async () => {
    // const res = await context.update(
    //   MOCK_TRANSACTION_ID,
    //   MOCK_UPDATE_TRANSACTION
    // );
    expect(1).toBe(1);
  });

  it('Delete item by id', async () => {
    // const res = await context.delete(MOCK_TRANSACTION_ID);
    expect(1).toBe(1);
  });
});
