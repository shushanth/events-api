import AppController from '../controllers/appController';

describe('controller: AppController', () => {
  const appController = new AppController();

  it('should have route controller events method', () => {
    expect(appController.events).toBeDefined();
  });
});