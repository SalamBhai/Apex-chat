import config from "./../config/config";
import mongoose from "mongoose";
import app from "./express";

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, { autoIndex: false }); //set the automatic indexing to false
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});



app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
