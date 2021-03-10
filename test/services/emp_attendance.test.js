const app = require('../../src/app');

describe('\'emp_attendance\' service', () => {
  it('registered the service', () => {
    const service = app.service('attendance');
    expect(service).toBeTruthy();
  });
});
