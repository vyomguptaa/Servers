// check if the website sending 400 error or working fine and showing 200
var http = require('http');
let https;
try {
    https = require('node:https');
} catch (err) {
    console.log('https support is disabled!');
}
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Enter your email',
        pass: 'Enter your password here'
    }
});
var mailOptions = {
    from: 'vyomgupta001@gmail.com',
    to: 'vyomgupta31@gmail.com',
    subject: 'Server is not running',
    text: 'Server is not running'
};
var url = 'https://chat.chatclay.com/app/5f20b9c83b820631fdb738eb';
https.get(url, function(res) {
    console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
    console.log("Got error: " + e.message);
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});