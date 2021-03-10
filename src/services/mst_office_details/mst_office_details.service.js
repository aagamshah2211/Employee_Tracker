// Initializes the `mst_office_details` service on path `/office`
const { MstOfficeDetails } = require('./mst_office_details.class');
const createModel = require('../../models/mst_office_details.model');
const hooks = require('./mst_office_details.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/office', new MstOfficeDetails(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('office');

  service.hooks(hooks);
};
