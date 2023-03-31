import AccountRepository from "../../application/repository/AccountRepository";
import Connection from "../database/Connection";

export default class AccountRepositoryDatabase implements AccountRepository {
  constructor(readonly connection: Connection) {}

  create(input: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getBalance(input: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  withdraw(input: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  deposit(input: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getExtract(input: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
