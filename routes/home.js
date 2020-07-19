function get(app) {
  app.get("/", (req, res) => {
    res.render("index");
    res.end();
  });
}

module.exports.get = get;
