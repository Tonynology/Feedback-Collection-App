const express = require('express');  // To get express, this syntax is common js module
const app = express();

app.get('/', (req, res) => {    //app.get, post, put, delete, patch
  res.send({ hi: 'there' });
});

app.listen(5000);

//http://localhost:5000/
