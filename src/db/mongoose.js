const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
