export default interface AccountRepository {
  create(input: any): Promise<any>;
  getBalance(input: any): Promise<any>;
  withdraw(input: any): Promise<any>;
  deposit(input: any): Promise<any>;
  getExtract(input: any): Promise<any>;
}
