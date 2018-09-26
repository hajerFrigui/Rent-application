const express = require("express");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");

const passportSetup = require("./config/passport-setup");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();

// set up a view engine
app.set("view engine", "ejs");

//set middleware for cookies

app.use(
  cookieSession({
    // duree maximale de connexion
    maxAge: 10000 * 60 * 10,
    //used to  protect ans decrypt our original credentials
    keys: [keys.session.cookiekey]
  })
);

// passport initialisation puis l utulisation de cookie
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
mongoose.connect(
  keys.mongodb.dbURI,
  { useNewUrlParser: true },
  () => {
    console.log("connected to mongoDB");
  }
);

//set up routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// create home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("app runing on port 3000");
});
