const mongoose = require('mongoose');
const { uri } = require('../../config/mongo');

const MONGO_URI = uri;

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'fitMixr',})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  priorWorkoutClass: String,
  priorWorkoutDuration: Number,
  workouts: [{
    // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
    id: {
      type: Schema.Types.ObjectId,
      ref: 'workouts',
    },
  }], // may need to update to OBJ later. Trying to Push workout obj to array
});

const UserData = mongoose.model('user', userSchema);

const workoutSchema = new Schema({
  workout: {},
});

const Workouts = mongoose.model('workouts', workoutSchema);

module.exports = { UserData, Workouts };
