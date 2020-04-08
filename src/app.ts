/** 
 * @App: App, express server app
 * @description: app which handles middleware, route and other app
 * level configuration.
*/

import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import swagger from 'swagger-ui-express';
import cors from 'cors';

import AppRoutes from './routes/appRoutes';
import swaggerConfig from "./swagger.json";
class App {
  public appServer: Application;
  public appRouter: Router;
  constructor() {
    this.appServer = express();
    this.appRouter = new AppRoutes().router;
    this.initConfig();
    this.initRoutes();
  }
  
  private initConfig() {
    this.appServer.use(bodyParser.json());
    this.appServer.use(bodyParser.urlencoded({ extended: false }));
    this.appServer.use(cors());
  }

  private initRoutes() {
    this.appServer.use('/api/docs', swagger.serve, swagger.setup(swaggerConfig));
    this.appServer.use('/', this.appRouter);
  }
}

export default App; 