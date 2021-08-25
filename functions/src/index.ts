import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

const database = admin.database();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const checkInvited = functions.auth
  .user()
  .onCreate(async (user: any) => {
    const email = user.email.replace(".", ",");
    const invited = await database
      .ref("invited_users/")
      .child(email)
      .get()
      .then((snapshot) => !!snapshot.val())
      .catch(console.error);
    console.log(invited);
    await admin.auth().setCustomUserClaims(user.uid, { invited });
    return invited;
  });
