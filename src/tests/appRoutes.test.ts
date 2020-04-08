import App from '../app';
import request from "supertest";

describe('controller: appController', () => {
  const app: App = new App();
  const fakeRequest = [
    { start: 30, end: 150 },
    { start: 540, end: 600 },
    { start: 560, end: 620 },
  ];
  it('POST /api/events/ : valid request cases', (done) => {
    const requestResult = request(app.appServer);
    requestResult
      .post('/api/events')
      .send(fakeRequest)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        const { body } = res;
        if (err) {
          throw err;
        }
        expect(body.id).toBeDefined();
        expect(body.events).toBeDefined();
        expect(body.events.length).toEqual(fakeRequest.length);
        done();
      });
  });

  it('POST /api/events/ :  invalid request cases', (done) => {
    const fakeRequest: any = null;
    const requestResult = request(app.appServer);
    requestResult
      .post('/api/events')
      .send(fakeRequest)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        const { body } = res;
        if (err) {
          throw err;
        }
        expect(body.id).toBeDefined();
        expect(body.events).toBeDefined();
        expect(body.events.length).toEqual(0);
        done();
      });
  });
})