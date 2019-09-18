const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mhdowney1@gmail.com',
        subject: 'Thanks for joining us!',
        text: `Welcome to the App, ${name}. Let me know how you get along with the app.`,
        // html: ''
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mhdowney1@gmail.com',
        subject: 'We are sorry to see you go!',
        text: `Goodbye, ${name}. Is there anything we could have done to keep you as a customer?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}