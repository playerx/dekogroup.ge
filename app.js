var express = require('express')
  , app = express()
  , path = require('path')

app.configure(function() {
  app.set('port', process.env.PORT || 8081);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, '')));
});

app.listen(app.get('port'), function() {
  console.log("Express server listening on port " );
});
