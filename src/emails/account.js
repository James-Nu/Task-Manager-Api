const sgMail = require("@sendgrid/mail");

//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

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "stainleznunoo@gmail.com",
    subject: "Excited to have onboard!",
    text: ` Welcome to Task Mnager App ${name}! We are excited to have 
        you on board.Feel free to contact our 24/7 customer support if you have any questiosn `,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "stainleznunoo@gmail.com",
    subject: "Sad to see you go 😢 ",
    text: `Its sad to see you go ${name}. Could you please tell us why you decided to cancel your account? This will be very helpful for us in the future. Thank you`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
