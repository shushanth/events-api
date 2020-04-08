import AppDateService from '../services/appDateService';

describe("method: getDateTimeInUtc", () => {
  const appDateService: any = new AppDateService();
  const timeDate = appDateService.getDateTimeUTC(90);
  it('should return results with truthy value', () => {
    expect(timeDate).toBeTruthy();
  });

  it('should return result of type date', () => {
    const timeDateInDate = new Date(timeDate);
    expect(timeDateInDate).toBeTruthy();
    expect(timeDate).toBeDefined();
  })
});