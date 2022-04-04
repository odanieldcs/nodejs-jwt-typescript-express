import "express-async-errors";
import express, { Express } from "express";
import routes from "@/routers";
import { apiFormatError } from "@/middlewares";

export class App {
  readonly app: Express = express();

  async init(): Promise<Express> {
    this.app.use(express.json());
    this.app.use(routes);
    this.app.use(apiFormatError);

    return this.app;
  }

  listen(port: number, callback: () => void): void {
    this.app.listen(port, callback);
  }
}

export const app = new App();
