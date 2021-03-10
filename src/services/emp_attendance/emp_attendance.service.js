// Initializes the `emp_attendance` service on path `/attendance`
const { EmpAttendance } = require('./emp_attendance.class');
const createModel = require('../../models/emp_attendance.model');
const hooks = require('./emp_attendance.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/attendance', new EmpAttendance(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('attendance');

  service.hooks(hooks);
};
