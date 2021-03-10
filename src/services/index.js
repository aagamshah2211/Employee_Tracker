const users = require('./users/users.service.js');
const empAttendance = require('./emp_attendance/emp_attendance.service.js');
const mstOfficeDetails = require('./mst_office_details/mst_office_details.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(empAttendance);
  app.configure(mstOfficeDetails);
};
