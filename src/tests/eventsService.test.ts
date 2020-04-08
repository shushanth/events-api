import EventsService from '../services/eventsService';

describe("EventsService", () => {
  const getPropertypeValue = (obj: any, prop: string) => {
    return obj[prop] || undefined;
  };

  const eventsService: any = new EventsService();
  it("should have services method", () => {
    expect(eventsService.create).toBeDefined();
    expect(eventsService.createEvents).toBeDefined();
  });

  describe("method: create", () => {
    const createEvent = eventsService.create([]);
    it('should return events response for valid and invalid input', () => {
      expect(createEvent.events.length).toBe(0);
    });

    it('should return proper results on passing the required events request', () => {
      const request = [{ "start": 30, "end": 75 }, { "start": 60, "end": 90 }, { "start": 120, "end": 540 }];
      const eventResponse = eventsService.create(request);
      expect(eventResponse).toBeDefined();
      expect(eventResponse.id).toBeDefined();
      expect(eventResponse.events).toBeDefined();
      expect(eventResponse.events.length).toEqual(request.length);
    });

    it('should return proper results on passing the required events request', () => {
      const firstIndex = 0;
      const secondIndex = 1;
      const request = [{ "start": 20, "end": 75 }, { "start": 60, "end": 90 }];
      const eventResponse = eventsService.create(request);
      expect(eventResponse).toBeDefined();
      expect(eventResponse.id).toBeDefined();
      expect(eventResponse.events).toBeDefined();
      expect(eventResponse.events.length).toEqual(request.length);
      expect(getPropertypeValue(eventResponse.events[firstIndex], 'id')).toBeDefined();
      expect(getPropertypeValue(eventResponse.events[firstIndex], 'title')).toBeDefined();
      expect(getPropertypeValue(eventResponse.events[firstIndex], 'startEvent')).toBeDefined();
      expect(getPropertypeValue(eventResponse.events[firstIndex], 'endEvent')).toBeDefined();
      expect(getPropertypeValue(eventResponse.events[firstIndex], 'locations')).toBeDefined();

      expect(getPropertypeValue(eventResponse.events[secondIndex], 'id')).toBeDefined();
      expect(getPropertypeValue(eventResponse.events[secondIndex], 'title')).toBeDefined();
      expect(getPropertypeValue(eventResponse.events[secondIndex], 'startEvent')).toBeDefined();
      expect(getPropertypeValue(eventResponse.events[secondIndex], 'endEvent')).toBeDefined();
      expect(getPropertypeValue(eventResponse.events[secondIndex], 'locations')).toBeDefined();
    });

  })
});