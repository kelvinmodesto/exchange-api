import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory');
const Transaction = sequelize.define(
  'Transaction',
  {
    transactionId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monetaryUnitSrc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monetaryUnitDest: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conversionRate: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    transactionDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    srcValue: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    destValue: {
      type: DataTypes.REAL,
      allowNull: false,
    },
  },
  {}
);

export default Transaction;
