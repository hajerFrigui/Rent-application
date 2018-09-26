const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require("../models/user-model");

passport.serializeUser((User, done) => {
  // na5edhou l id mta3 l user in the mongodb not the googleId
  done(null, User.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// will use google strategy as a middleware, inform passport here
passport.use(
  new GoogleStrategy(
    {
      // deja sna3na online project fl developper.google
      // on ajoute les options de strategy
      callbackURL: "http://localhost:3000/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      //passport callBack function

      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          //already a user mawjoud fl base
          console.log("user mawjoud deja:" + currentUser);
          done(null, currentUser);
        } else {
          // if not create a user jdid jimla
          new User({
            username: profile.displayName,
            googleId: profile.id
          })
            .save()
            .then(newUser => {
              console.log("new user tisna3:" + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
