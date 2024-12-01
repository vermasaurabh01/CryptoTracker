const mongoose = require("mongoose");
const password = encodeURIComponent("Saurabh@1122");
const uri =
    `mongodb+srv://Saurabh:${password}@cluster0.ho0t2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

function dbConnection() {
  mongoose
    .connect(uri)
    .then((response) => {
      console.log("DB CONNECT SUCCESS");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
