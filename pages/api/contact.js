import Unisender from 'unisender-api';

export default function (req, res) {

  const unisender = new Unisender(process.env.UNISENDER_API);
  unisender.subscribe('10', req.body.email, req.body.name, {}, {double_optin: 4, overwrite: 2});
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.yandex.ru",
    auth: {
      user: 'nikita2199@yandex.ru',
      pass: process.env.PASSWORD,
    },
    secure: true,
  })
  const mailData = {
    from: 'nikita2199@yandex.ru',
    to: 'nikita2199@yandex.ru',
    subject: `Message From ${req.body.name}`,
    text: req.body.phone + " | Sent from: " + req.body.name,
    html: `<div>${req.body.phone}</div><p>Sent from:
    ${req.body.phone}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}