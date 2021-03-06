const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ryotaro0924h@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcom to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ryotaro0924h@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomEmail,
    sendCancelationEmail
}