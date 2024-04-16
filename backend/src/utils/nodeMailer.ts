import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'nolan.huel25@ethereal.email',
        pass: 'GDhB2J5T48YncTEKPM'
    }
});

export default transporter;