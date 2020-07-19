const express = require("express");
const { static } = require("express");
const Datastore = require("nedb");
require("dotenv").config();
const homeRoute = require("./routes/home");
const contactRoute = require("./routes/contact");
const reviewsRoute = require("./routes/reviews");

const reviews = new Datastore("reviews.db");
reviews.loadDatabase();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.use(express.urlencoded({ extended: false }));

app.set("views", "./views");
app.set("view engine", "ejs");

homeRoute.get(app);
contactRoute.get(app);
contactRoute.post(app);
reviewsRoute.get(app);
reviewsRoute.post(app);

app.use(function (req, res, next) {
  return res.status(404).render("pagenotfound");
});

app.listen(port, () => {
  console.log(`starting server on port ${port}`);
});

module.exports.reviews = reviews;
