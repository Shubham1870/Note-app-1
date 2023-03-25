const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connection;
