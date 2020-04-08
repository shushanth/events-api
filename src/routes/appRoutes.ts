/** 
 * @routes: AppRouter, 
 * @description: app level which handle multiple routes/views to respective controllers
*/
import { Router } from "express";

import AppController from '../controllers/appController';
export class AppRoutes {
  public router: Router = Router();
  public appController = new AppController();
  constructor() {
    this.mapRoutesWithControllers();
  }

  private mapRoutesWithControllers() {
    this.router.post("/api/events/", this.appController.events)
  }
};

export default AppRoutes;


