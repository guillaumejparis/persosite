var express = require('express');
var app = express();

app.listen(8080, function () {
});

app.use(express.static('dist'));
