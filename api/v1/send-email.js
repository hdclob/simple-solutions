const express = require("express");
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');

const app = express();

const apiKey = process.env.SENDGRID_KEY;
sgMail.setApiKey(apiKey);

app.use(bodyParser.json())
app.post("/", (req, res) => {
  // let message = "Message from: " + req.body.email + "\n" + req.body.message;
  // let msg = {
  //   to: 'hdclob25@gmail.com', // Change to your recipient
  //   from: 'hdclob25@gmail.com', // Change to your verified sender
  //   subject: req.body.subject,
  //   text: message,
  // }

  // sgMail
  //   .send(msg)
  //   .then(() => {
  //       return res.status(200).json({ 'message': 'Email sent!' })
  //   })
  //   .catch((error) => {
  //       return res.status(400).json({ 'error': 'Opsss... Something went wrong ' + error })
  //   })

    return res.status(200).json({ 'message': 'Email sent!' })
    // return res.status(400).json({ 'error': 'Opsss... Something went wrong' })

});

module.exports = {
    path: "/api/v1/send-email",
    handler: app
};
