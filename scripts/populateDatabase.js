const admin = require("firebase-admin");
const serviceAccount = require("./sushi4UAdminSdk.json");
const signatureMenus = require("./signatureData.json");
const menuItems = require("./menuData.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// let menuItems = [];
// let signatureMenus = [];

console.log(`Uploading ${menuItems.length} items to Firestore...`);

menuItems.forEach((item, index) => {
  console.log(`Uploading item ${index + 1}:`, item);

  if (!item.name) {
    console.error("Item name missing: ", item);
    return;
  }

  let docId = `${item.name.replace(/\//g, "_")}_${index}`; // Append index to each item name

  db.collection("menu")
    .doc(docId)
    .set(item)
    .then(() => console.log(`Menu item '${docId}' added to Firestore!`))
    .catch((error) =>
      console.error(`Error adding document '${docId}': `, error)
    );
});

// signatureMenus.forEach((item) => {
//   db.collection("signaturemenu")
//     .doc()
//     .set(item)
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
//     console.log("Signature menu items added to Firestore!")
// });
