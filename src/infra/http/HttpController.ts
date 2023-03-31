import HttpServer from "./HttpServer";

export default class HttpController {
  constructor(readonly httpServer: HttpServer) {
    httpServer.on(
      "post",
      "/create-account",
      async function (params: any, body: any) {
        const output = "criado";
        return output;
      }
    );

    httpServer.on(
      "get",
      "/account-balance",
      async function (params: any, body: any) {
        const output = "saldo";
        return output;
      }
    );
  }
}
