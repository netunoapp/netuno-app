const { connect } = require("mongoose");

connect(`${process.env.URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected!"))
  .catch(console.log);
