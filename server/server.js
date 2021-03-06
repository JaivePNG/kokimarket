var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors=require('cors')
var OrderDetails=require('./routes/OrderDetails');

var PORT = process.env.PORT || 3000
var app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use('/orderDetails',OrderDetails);

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
