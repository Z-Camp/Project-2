// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
// let loginInfo = require("../public/js/login")
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // POST route for saving a new activity
  app.post("/api/activities", function(req, res) {
    console.log("line 65", req.body);
    db.Activity.create({
      activityType: req.body.activityType,
      time: req.body.time,
      distance: req.body.distance,
      dateTime: req.body.date,
      UserId: req.body.userId
    }).then(function(dbActivity) {
      res.json(dbActivity);
    });
  });
  // GET route for returning all activity Data
  app.get("/api/activities/:userId", function(req, res) {
    db.Activity.findAll({
      where: {
        userId: req.params.userId
      },
      order: [
        ["dateTime", "asc"]
      ]
    }).then(function(dbActivity) {
      res.json(dbActivity);
      console.log(dbActivity);
    });
  });
};
