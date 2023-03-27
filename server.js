'use strict';

const express = require('express');
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
const request = require('request');
// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World succeeded request');
  var options = {
    url: 'http://back:8080',
    method: 'GET'
  }
  request(options, function (error, response, body) {
    console.log(body);
  })
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);