const server = require("../server");

function get(app) {
  app.get("/reviews", (req, res) => {
    console.log("reviews");
    server.reviews.find({}, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      }
      res.render("reviews", { reviews: data });
    });
  });
}

function post(app) {
  app.post("/reviews", async (req, res) => {
    const details = {
      name: req.body.name,
      email: req.body.email || process.env.EMAILNAME,
      review: req.body.review,
    };
    await server.reviews.insert(details);
    res.redirect("/reviews");
    res.end();
  });
}
module.exports.get = get;
module.exports.post = post;
