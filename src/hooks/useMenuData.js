// hooks/useMenuData.js
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "firebaseConfig";

export const useMenuData = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const menuRef = collection(db, "menu");
      const snapshot = await getDocs(menuRef);
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        firebaseId: doc.id,
      }));

      console.log("Firebase data:", data);
      data.sort((a, b) => (a.id > b.id ? 1 : -1)); //sort the menus according to id
      setMenuItems(data);

      const categories = data.map((item) => item.category);
      const uniqueCategories = [...new Set(categories)]; //remove duplicate categories
      setCategories(uniqueCategories);
      setLoadingCategories(false);
    };

    fetchData();
  }, []);

  return { menuItems, categories, loadingCategories };
};
