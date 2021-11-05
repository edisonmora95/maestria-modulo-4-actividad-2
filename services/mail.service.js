const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

console.log("🚀 ~ file: mail.service.js ~ line 11 ~ process.env.EMAIL_USER", process.env.EMAIL_USER)
/**
 * @param {string} email
 * @param {object} data
 */
const sendRegisterEmail = async (email, data) => {
  return new Promise((resolve, reject) => {
    return transporter.sendMail({
      from: `Arquitectura de Servidores <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome",
      html: `
        <h1>Welcome to Arq de Servidores</h1>
        <p>Activate your account</p>
        <a href="http://localhost:3000/users/${data._id}/activate">Click here</a>
      `,
    })
      .then(() => {
        console.log(`Email sent to ${email}`);
        resolve();
      })
      .catch((error) => {
        console.log(`Couldn't send email to ${email}`, error);
        reject();
      });
  });
};

module.exports = {
  sendRegisterEmail,
};
