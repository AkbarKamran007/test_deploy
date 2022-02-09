import express, { Application } from "express";
import cors from "cors";
import router from "./router";
class App {
  public app: Application;
  public baseUrl = "/api/sticker";

  constructor() {
    this.app = express();
    this.initializer();
  }

  private initializer() {
    this.app.use(cors({ credentials: true, origin: true }));
    this.app.use(express.json());
    this.app.use(`${this.baseUrl}`, router);
  }
}

export default App;
