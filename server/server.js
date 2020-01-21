const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// statically serve everything in the build folder on the route '/build'
if (process.env.NODE_ENV !== 'development') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
}); // listens on port 3000 -> http://localhost:3000/
