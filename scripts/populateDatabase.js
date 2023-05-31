const admin = require("firebase-admin");
const serviceAccount = require("./sushi4UAdminSdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Suppose we have a "menuItems" array with our structured data
let menuItems = [
 
];

menuItems.forEach((item) => {
  db.collection("menu").doc().set(item);
});
