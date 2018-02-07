ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();

moment = require('moment');

module.exports = api;

api.get('/hello', function () {
  return 'hello world';
});

api.post('/incoming-call', function (request) {
  var now = moment();

  return '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<Response>\n'
    + '  <Dial>\n'
    + '  <!-- ' + now.format() + ' -->\n'
    + '    <Number>4915254540731</Number>\n'
    + '  </Dial>\n'
    + '</Response>\n';
}, {
  success: { contentType: 'application/xml' },
  error: { contentType: 'application/json' }
});
