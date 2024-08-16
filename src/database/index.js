const { connect } = require("mongoose");

connect(`${process.env.URI}`)
  .then(() => console.log("MongoDB Connected!"))
  .catch(console.log);
