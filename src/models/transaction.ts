import { Sequelize, DataTypes } from 'sequelize';

const defineTransactionModel = (sequelize: Sequelize) => {
  return sequelize.define(
    'Transaction',
    {
      transactionId: {
        type: DataTypes.INTEGER,
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
        allowNull: true,
      },
      transactionIsSucceeded: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {}
  );
};

export default defineTransactionModel;
