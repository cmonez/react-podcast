const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost:27017/react-podcasts';
const db = mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to mongo database!!'))
  .catch((error) => console.log('Error connecting here:', error));

module.exports = db;
