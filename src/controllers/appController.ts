/** 
 * @controller: AppController
 * @description: app controller, handles multiple routes and responses from service to view/routes
*/
import { Request, Response } from 'express';

import logger from '../utils/log';
import EventsService from '../services/eventsService';
import { EventsResponseSchema } from '../services/eventsSchema';
class AppController {
  public events = (request: Request, response: Response) => {
    const { body } = request;
    logger.logInfo(`event body request ===>`)
    logger.logInfo(body);
    const eventsService = new EventsService();
    const eventsResponse: EventsResponseSchema = eventsService.create(body);
    logger.logInfo(`event create response ====>`)
    logger.logInfo(eventsResponse);
    response.json(eventsResponse);
  }
}

export default AppController;