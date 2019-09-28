const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`[MONGODB]: Connected to database successfully`))
  .catch(err => console.log(`[MongoError]: ${err}`));
