const models = require('../models/fitMixrModels');

const fitMixrController = {};

fitMixrController.findData = (req, res, next) => {
  // write code here
  models.Person.find().then((response) => {
    res.locals = response;
    next();
  });
  // next();
};

fitMixrController.testPost = (req, res, next) => {
  
}

module.exports = fitMixrController;
