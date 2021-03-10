const app = require('../../src/app');

describe('\'mst_office_details\' service', () => {
  it('registered the service', () => {
    const service = app.service('office');
    expect(service).toBeTruthy();
  });
});
