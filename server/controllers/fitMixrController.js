const models = require('../models/fitMixrModels');

const fitMixrController = {};

// fitMixrController.addUser = (req, res, next) => {
//   const testUser = {
//     name: 'Matt Peters',
//   };
//   models.UserData.create(testUser)
//     .then(() => {
//       console.log('Inserted User to DB!');
//       return next();
//     })
//     .catch((error) => {
//       next({
//         log: 'Express error handler caught unknown middleware error in fitMixrController.addUser',
//         message: { err: `An error occurred ${error}` },
//       });
//     });
// };

fitMixrController.addWorkout = (req, res, next) => {
  console.log('req.body', req.body);
  const submission = {};
  submission.workout = req.body;
  // submission.push(req.body);

  models.Workouts.create(submission)
    .then((response) => {
      console.log('Inserted to DB!', response);
      return next();
    }).catch((error) => {
      console.log('Test Post Error Occurred');
      return next(error);
    });
};

fitMixrController.getWorkouts = (req, res, next) => {
  
  models.Workouts.find()
    .then((response) => {
      console.log(response);
      res.locals = response;
      next();
    }).catch((error) => {
      next({
        log: 'Express error handler caught unknown middleware error in fitMixrController.getWorkouts',
        message: { err: `An error occurred ${error}` },
      });
    });
};

// fitMixrController.findUser = (req, res, next) => {
//   // write code her
//   models.UserData.find().then((response) => {
//     res.locals = response;
//     return next();
//   }).catch((error) => {
//     return next({
//       log: 'Express error handler caught unknown middleware error in fitMixrController.findUser',
//       message: { err: `An error occurred ${error}` },
//     });
//   });
//   // next();
// };

// fitMixrController.testPost = (req, res, next) => {
//   const testData = {
//     workoutLength: 56,
//     test: 'Test',
//   };

//   console.log('testPost hit');

//   models.WorkoutData.create(testData)
//     .then((response) => {
//       console.log('Inserted to DB!');
//       return next();
//     }).catch((error) => {
//       console.log('Test Post Error Occurred');
//       return next(error);
//     })
// };


module.exports = fitMixrController;
