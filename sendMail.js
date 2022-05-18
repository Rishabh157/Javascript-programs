// First you need to install nodemailer package using => npm install nodemailer
// we have to require or import it
const nodemailer = require("nodemailer")

// nodemailer.createTransport() method return a object transporter
let trasporter = nodemailer.createTransport({
 service: "gmail",
 auth: {
  user: "abc@gmail.com", // which account you send an email to others
  pass: "1342643" // and their password 
 }
})

// Declare A Gmail
let name = "Alan Turing"
let mailOption = {
 from: "abc@gmail.com",  // sender
 to: "vd@gmail.com", // reciever
 subject: "JOB",
 text: "abcdef....",
 html: `<h1>Hello ${name}</h1>`
}

// sendMail() function takes two argument first declared message as an object and second callbeck functiom
trasporter.sendMail(mailOption, (err, info) => {
 if (info) {
  console.log(info.messageId)
 }
 else {
  console.log(err)
 }
})