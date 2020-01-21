const mongoose = require('mongoose');

// FjSqIsJuMrJG00ks

const MONGO_URI = 'mongodb+srv://mgpeters:FjSqIsJuMrJG00ks@cluster0-zmp69.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'fitMixr',})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: Date,
  workoutLength: Number,
  test: String,
});

const WorkoutData = mongoose.model('workoutData', workoutSchema);

module.exports = { WorkoutData };
