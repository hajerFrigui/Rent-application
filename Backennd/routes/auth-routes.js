const router = require("express").Router();
const passport = require("passport");

//authentication login
router.get("/login", (req, res) => {
  // handled with passport
  res.render("login", { user: req.user });
});

//auth logout

router.get("/logout", (req, res) => {
  // handled with passport
  res.send("logging out");
});

//auth with google

router.get(
  "/google",
  passport.authenticate("google", {
    // scope lets us retrieve the info that we need
    scope: ["profile"]
  })
);

//callback route apres le choix de compte dans google authenticate

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // res.send(req.user);
  res.redirect("/profile");

  //access the info of the user profile
});

module.exports = router;
