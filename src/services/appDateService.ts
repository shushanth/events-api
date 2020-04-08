/** 
 * @dateService: app level date service
 * @description: handles the date services
*/

class AppDateService {
  private currentDate: Date = new Date(Date.now());
  private startThreshold: number = 9;
  public setStartThreshold(threshold: number) {
    this.startThreshold = threshold;
  }
  public getDateTimeUTC(minutes: number) {
    if (this.startThreshold) {
      const hours = this.startThreshold + Math.trunc(minutes / 60);
      const minutesInHours = minutes % 60;
      this.currentDate.setHours(hours);
      this.currentDate.setMinutes(minutesInHours);
      this.currentDate.setSeconds(0);
      return this.currentDate.toUTCString();
    }
  }
}
export default AppDateService;