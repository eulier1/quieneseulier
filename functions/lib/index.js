"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.addMessage = functions.https.onRequest((request, response) => {
    // Grab the text parameter.
    const original = request.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    return admin.database().ref('/messages').push({ original: original }).then((snapshot) => {
        // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
        return response.redirect(303, snapshot.ref.toString());
    });
});
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite((change, context) => {
    const snapshot = change;
    // Only send email for new messages.
    if (snapshot.before.exists() || !snapshot.after.exists()) {
        return null;
    }
    const val = snapshot.after.val();
    const mailOptions = {
        to: 'eulier1@gmail.com',
        subject: `Información Enviada por ${val.name}`,
        html: val.html
    };
    return mailTransport.sendMail(mailOptions).then(() => {
        console.log('Email enviado a: eulier1@gmail.com');
    });
});
//# sourceMappingURL=index.js.map