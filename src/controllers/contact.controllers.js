const connection = require('../database');
const nodemailer = require('nodemailer');

function SaveMailInTheDataBase(post) {
    if(post.canSaveMail) {
        const query = "insert into mail(completeName, mail, phone) values('"
                    + post.completeName + "', '"
                    + post.from + "', '"
                    + post.phone + "')";
        
        connection.query(query, (error, results) => {
            if (error) throw error;        
            if(results.length > 0) {
                return {message: results};
            } else {
                return {message: "Not found"};
            }
        });
    }
}

function MailSenderToSeyo(post) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'adribirra@gmail.com',
          pass: 'adrianibarra97@&'
        }
      });

    const mail = {
        from: post.from,
        to: post.to,
        subject: post.subject,
        text:   "Complete Name: " + post.completeName + "\n" +
                "From: " + post.from + "\n" +
                "Phone: " + post.phone + "\n" +
                "Text: " + post.text
    };

    transporter.sendMail(mail, function(error, info) {
        if(error) {
            return {message: error};
        }else {
            return {message: info};
        }
    });
}

const contactCtrl = {};

contactCtrl.postContact = (req, res) => {
    // I'm missing: Send email and save it in the database if the client allows it
    const post = req.body;

    const response = {
        BBDD: SaveMailInTheDataBase(post),
        MailSender: MailSenderToSeyo(post)
    };

    res.json(response);
}

module.exports = contactCtrl;