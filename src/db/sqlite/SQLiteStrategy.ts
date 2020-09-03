import { ContextStrategy } from '@db/base';

export default class SQLiteStrategy extends ContextStrategy {
  public connection: any;

  public model: any;

  constructor(connection: any, model: any) {
    super(connection);
    this.model = model;
    this.connection = connection;
  }
}
