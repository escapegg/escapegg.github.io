var debug = require('debug')('www');
var app = require('./main');

app.set('port', 8080);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});