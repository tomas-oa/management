const mongoose = require('mongoose');

const connect = async () => {
  mongoose.set('strictQuery', true);
  await mongoose.connect(process.env.MONGO_URI);
  console.log('db conectada');
};

module.exports = connect;
