var express = require('express')
var requestIp = require('request-ip');
var app = express()
var useragent = require('useragent')


var port = process.env.PORT || 8080
app.listen(port, function () {
  console.log('App listening on port 8080!');
});

app.get('/',function(req,res){
    var info = {
		ipaddress: requestIp.getClientIp(req),
		language: req.headers["accept-language"].split(",")[0],
		software: useragent.parse(req.headers['user-agent']).os.family
	};
	res.json(info);
} )