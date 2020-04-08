import winston, { format } from 'winston';

class Log {
  public logger: any;
  public currentDate: Date = new Date(Date.now());
  constructor() {
    this.logger = winston.createLogger({
      transports: [new winston.transports.Console({
        format: format.combine(
          format.json()
        ),
      })],
    });
    //production config
    if(process.env.NODE_ENV === 'production') {
      this.logger.add(new winston.transports.Console({
        format: winston.format.simple()
      }))
    }
  }
  public logInfo(message: any) {
    this.logger.log({ level: 'info', message: `${this.currentDate} ::=> ${JSON.stringify(message)}` });
  }

  public logError(error: any) {
    this.logger.log({ level: 'error', error });
  }

};

export default new Log;