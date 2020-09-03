export interface IDb {
  create(item: any): any;
  read(item: any): any;
  update(id: string, item: any): any;
  delete(id: string): any;
  isConnected(): any;
}
