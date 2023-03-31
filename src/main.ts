import "dotenv/config";

import ExpressAdapter from "./infra/http/ExpressAdapter";
import HttpController from "./infra/http/HttpController";

const httpServer = new ExpressAdapter();
new HttpController(httpServer);
const port = Number(process.env.PORT);
httpServer.listen(port);
