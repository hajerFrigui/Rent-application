const router = require("express").Router();

const authCheck = (req, res, next) => {
  // si logged deja
  if (!req.user) {
    res.redirect("/auth/login");
  } else {
    // on ututlise next pour executer le code suivant le authcheck in
    //router.get function
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  res.send(
    "this is ur profile: " +
      req.user.username +
      "    this is ur id: " +
      req.user.id
  );
});

module.exports = router;
