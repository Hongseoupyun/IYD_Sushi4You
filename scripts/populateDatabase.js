// const admin = require("firebase-admin");
// const serviceAccount = require("./sushi4UAdminSdk.json");
// // const signatureMenus = require("./signatureData.json");
// // const menuItems = require("./menuData.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// const db = admin.firestore();

// // let menuItems = [];
// // let signatureMenus = [];

// menuItems.forEach((item) => {
//   db.collection("menu")
//     .doc()
//     .set(item)
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
//     console.log("Menu items added to Firestore!")
// });

// signatureMenus.forEach((item) => {
//   db.collection("signaturemenu")
//     .doc()
//     .set(item)
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
//     console.log("Signature menu items added to Firestore!")
// });
