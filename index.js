var express = require("express");
var app = express();
app.set('view engine','ejs');
app.set('port',(process.env.PORT||2002))
app.get('/',function(req, res){
res.render('BITCH');
})
app.listen(
app.get('port', function() {console.log('Server start at port '+app.get('port'))}));
