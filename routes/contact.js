const sendMail = require("../emailSender/email");

function get(app) {
  app.get("/contact", (req, res) => {
    res.render("contact");
    res.end();
  });
}

function post(app) {
  app.post("/contactform", (req, res) => {
    try {
      const details = {
        from: process.env.EMAILNAME,
        to: process.env.EMAILNAME,
        subject: "contact",
        text: `name: ${req.body.name}, email: ${req.body.email} \n contact: ${req.body.contactDetails}`,
      };
      const service = "gmail";
      sendMail(details, service, process.env.EMAILNAME, process.env.PASSWORD);
      console.log("email sent");
    } catch (err) {
      console.log(err);
    }

    res.redirect("/");
    res.end();
  });
}

module.exports.get = get;
module.exports.post = post;
