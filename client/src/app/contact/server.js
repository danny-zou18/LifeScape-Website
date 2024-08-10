const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nodemailer setup and sender information
// Unsure how to make this more secure as of now
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email',
        pass: 'password'
    }
});

// Receiver mail
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'email',
        subject: `New message from ${name}`,
        text: message
    };

    // Send mail and catch errors
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ success: false, message: 'Failed to send email.' });
        }
        res.status(200).send({ success: true, message: 'Email sent successfully.' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
