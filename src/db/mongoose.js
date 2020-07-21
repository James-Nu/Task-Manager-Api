const mongoose = require("mongoose");
require("dotenv").config({ path: "MONGODB_URL" });

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
