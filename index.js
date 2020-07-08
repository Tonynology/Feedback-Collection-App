const express = require('express');  // To get express, this syntax is common js module
const app = express();

app.get('/', (req, res) => {    //app.get, post, put, delete, patch
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//http://localhost:5000/
