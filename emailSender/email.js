const nodemailer = require("nodemailer");

function sendMail(details, service, user, password) {
  const transporter = nodemailer.createTransport({
    service: service,
    auth: {
      user: user,
      pass: password,
    },
  });

  transporter.sendMail(details, (error, info) => {
    if (error) {
      console.error("failed", error);
    } else {
      console.log("sent message");
    }
  });
}

module.exports = sendMail;
