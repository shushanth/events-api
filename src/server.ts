/** 
 * @server: server
 * @description: consumes the app and handles the listening for the requests 
*/

import App from './app';

import logger from './utils/log';

const app = new App();
const{ appServer } = app;
const port = process.env.PORT || 2000;

appServer
  .listen(
    port, 
    () => logger.logInfo(`app listening on port ${port}`),
  );
