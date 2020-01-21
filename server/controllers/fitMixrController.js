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
  const testData = {
    //date: new Date("<YYYY-mm-dd>"),
    workoutLength: 56,
    test: 'Test',
  }
  console.log('testPost hit');
  models.WorkoutData.create(testData)
    .then((response) => {
      console.log('Inserted to DB!');
      return next();
    }).catch((error) => {
      console.log('Test Post Error Occurred');
      return next(error);
    })
};


module.exports = fitMixrController;
