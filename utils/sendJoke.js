const Mailgen = require("mailgen");
const nodemailer = require("nodemailer");
const { EMAIL, PASS } = process.env;

const sendJoke = (joke, useremail) => {
  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASS,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Mailgen",
      link: "https://mailgen.js",
    },
  });

  let response = {
    body: {
      name: useremail,
      intro: joke,
    },
  };

  let mailResponse = MailGenerator.generate(response);

  let message = {
    from: "fpoljaric@gmail.com",
    to: useremail,
    subject: "Chuck Norris joke.",
    html: mailResponse,
  };

  const success = transporter
    .sendMail(message)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
  return success;
};

module.exports = sendJoke;
