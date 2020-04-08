/** 
 * @service: EventService
 * @description: constructs start time and end time for the events
 * and returns response as per the schema
*/
import { v1 as uuidv1 } from 'uuid';

import logger from '../utils/log';
import {
  EventsRequestSchema,
  EventsResponseSchema,
} from './eventsSchema';
import AppDateService from './appDateService';
class EventsService {

  public createEvents(eventsPosted: Array<EventsRequestSchema>) {
    const appDateService = new AppDateService();
    const doesEventExists = eventsPosted && !!Object.keys(eventsPosted).length;
    /*invalid input cases, just returning empty array,
      not throwing any error or handling error middlewares in this app
      assuming as valid input
    */
    if (!doesEventExists) {
      return [];
    }
    return eventsPosted.map(({ start, end }: EventsRequestSchema, index) => {
      logger.logInfo(`event start ${start}`);
      logger.logInfo(`event end ${end}`);
      const timeStartDate = appDateService.getDateTimeUTC(start);
      const timeEndDate = appDateService.getDateTimeUTC(end);
      return {
        id: uuidv1(),
        title: `item ${index + 1}`,
        startEvent: {
          timeDate: timeStartDate,
        },
        endEvent: {
          timeDate: timeEndDate,
        },
        locations: {
          title: `location ${index + 1}`,
          place: ''
        }
      }
    })
  }

  public create(events: Array<EventsRequestSchema>): EventsResponseSchema {
    logger.logInfo(`info ${events}`);
    const eventsCreated = {
      id: uuidv1(),
      events: this.createEvents(events)
    };
    logger.logInfo(`eventsCreated: ${eventsCreated}`);
    return eventsCreated;
  }
}

export default EventsService;