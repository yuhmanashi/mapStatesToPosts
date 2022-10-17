
const mongoose = require("mongoose");

const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const users = require("./routes/api/users")
const posts = require("./routes/api/posts")
const photos = require('./routes/api/photos')
const comments = require("./routes/api/comments")
const USAStates = require("./routes/api/USAStates")
const passport = require("passport");



app.use(passport.initialize());
require('./config/passport')(passport);
const path = require('path');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }

app.get("/", (req, res) => res.send("Hello Mars"));
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/photos", photos);
app.use("/api/comments", comments);
app.use("/api/USAStates", USAStates);

const port = process.env.PORT || 5500; // change this back to 5000?

app.listen(port, () => console.log(`Server is running on port ${port}`));

//use for upload photo

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}