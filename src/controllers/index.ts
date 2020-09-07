import { makeTransactionRequest, getTransactionsByUsers } from './transactions';

const main = {
  getTransactionsByUsers,
  makeTransactionRequest,
};

export { main, getTransactionsByUsers, makeTransactionRequest };
export default main;
