const express = require('express');

const app = express();
const path = require('path');

// uncomment the below for proxy challenge

// statically serve everything in the build folder on the route '/build'
if (process.env.NODE_ENV !== 'development') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(3000); // listens on port 3000 -> http://localhost:3000/
