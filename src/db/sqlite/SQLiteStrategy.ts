import { Sequelize } from 'sequelize';

import { ContextStrategy } from '../base';

export default class SQLiteStrategy extends ContextStrategy {
  public model: any;

  public static connection: Sequelize;

  constructor(connection: any, model: any) {
    super(connection);
    this.model = model;
  }

  public async create(item: any = {}) {
    return this.model.create(item);
  }

  public async read(item: any = {}) {
    return this.model.findAll(item);
  }

  public async update(values: any, selector: any = {}) {
    return this.model.update({ values }, { selector });
  }

  public async delete(id: string) {
    return this.model.destroy({ id });
  }

  public static async isConnected() {
    const { log, error } = console;
    try {
      await this.connection.authenticate();
      log('Connection has been established successfully.');
      return true;
    } catch (e) {
      error('Unable to connect to the database:', error);
      return false;
    }
  }

  public static async connect() {
    this.connection = new Sequelize({
      dialect: 'sqlite',
      storage: 'exchange.sqlite',
    });
  }
}
