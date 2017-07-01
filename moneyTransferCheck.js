const request = require('request');
const cheerio = require('cheerio');


// TransferGo
// TransferWise
// CurrencyFair
// Paypal
// XendPay
// WorlRemit
// MoneyCorp
// MoneyGram
// WesternUnion
// HSBC
// Lloyds
// Lebara Money
// FairFX
// Skrill

var express = require("express");
var app = express();
app.use(express.static(__dirname + '/public'));

app.post('/myaction', function(req, res) {
  res.send('You sent the name "' + req.body.name + '".');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
