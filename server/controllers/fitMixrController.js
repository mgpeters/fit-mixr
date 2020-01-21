const models = require('../models/fitMixrModels');

const fitMixrController = {};

fitMixrController.addUser = (req, res, next) => {
  const testUser = {
    name: 'Matt Peters',
  };
  models.UserData.create(testUser)
    .then(() => {
      console.log('Inserted User to DB!');
      return next();
    })
    .catch((error) => {
      next({
        log: 'Express error handler caught unknown middleware error in fitMixrController.addUser',
        message: { err: `An error occurred ${error}` },
      });
    });
};

fitMixrController.addWorkout = (req, res, next) => {

}

fitMixrController.findUser = (req, res, next) => {
  // write code her
  models.UserData.find().then((response) => {
    res.locals = response;
    next();
  }).catch((error) => {
    next({
      log: 'Express error handler caught unknown middleware error in fitMixrController.findUser',
      message: { err: `An error occurred ${error}` },
    });
  });
  // next();
};

fitMixrController.testPost = (req, res, next) => {
  const testData = {
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
