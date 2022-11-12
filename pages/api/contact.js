import Unisender from 'unisender-api';

export default function (req, res) {

  const unisender = new Unisender(process.env.UNISENDER_API);
  unisender.subscribe('10', req.body.email, req.body.name, {}, {double_optin: 4, overwrite: 2});
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.yandex.ru",
    auth: {
      user: 'info@zaga-game.com',
      pass: process.env.PASSWORD,
    },
    secure: true,
  })
  const mailData = {
    from: 'info@zaga-game.com',
    to: 'info@zaga-game.com',
    subject: `Заявка с нового сайта zaga-game`,
    text: 'Номер телефона: ' + req.body.phone + " | Имя: " + req.body.name,
    html: `<div>Имя: ${req.body.name}</div><p>Номер телефона:
    ${req.body.phone}</p><div>E-mail: ${req.body.email}</div>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}