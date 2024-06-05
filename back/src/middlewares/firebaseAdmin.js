const admin = require('firebase-admin');
const serviceAccount = require('../config/computech-log-firebase-adminsdk-o39oe-e1da83234a.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth();

const disableFirebaseUser = async (uid) => {
  await auth.updateUser(uid, { disabled: true });
};

const enableFirebaseUser = async (uid) => {
  await auth.updateUser(uid, { disabled: false });
};

module.exports = { auth, disableFirebaseUser, enableFirebaseUser };