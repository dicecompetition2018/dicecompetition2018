
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


/********************************************************************************************
 * Function 1: Insert data into the Firebase Realtime Database                              *
 ********************************************************************************************/
exports.addParticipant = functions.https.onRequest((req, res) => {
  
  const email = req.query.email;
  const password = req.query.password;

  admin.database().ref('/participant').push({email: email, password: password}).then((snapshot) => {
    return snapshot;
  });
});


/********************************************************************************************
 * Function 1: Take the text parameter passed to this HTTP endpoint and insert it into the  *
 *             Realtime Database under the path /messages/:pushId/original                  *
 ********************************************************************************************/

