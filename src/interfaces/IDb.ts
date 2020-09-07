export interface IDb {
  create(item: any): any;
  read(item: any): any;
  update(values: any, selector: any): any;
  delete(id: string): any;
  isConnected(): any;
}
