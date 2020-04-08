interface EventsRequestSchema {
  start: number;
  end: number;
};
  
interface EventResponseSchema {
  id: string;
  title: string;
  startEvent: {
    timeDate: string;
  };
  endEvent: {
    timeDate: string;
  };
  locations: {
    title: string;
    place: string;
  }
}
  
interface EventsResponseSchema {
  id: string;
  events: Array<EventResponseSchema | any>
}

export {
  EventsResponseSchema,
  EventResponseSchema,
  EventsRequestSchema,
}
