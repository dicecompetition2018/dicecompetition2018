
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


/********************************************************************************************
 * Function 1: Take the text parameter passed to this HTTP endpoint and insert it into the  *
 *             Realtime Database under the path /messages/:pushId/original                  *
 ********************************************************************************************/
exports.addParticipant = functions.https.onRequest((req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  return admin.database().ref('/participant').push({email: email, password: password}).then((snapshot) => {
    return res.redirect(303, snapshot.ref);
  });
});


/********************************************************************************************
 * Function 1: Take the text parameter passed to this HTTP endpoint and insert it into the  *
 *             Realtime Database under the path /messages/:pushId/original                  *
 ********************************************************************************************/

