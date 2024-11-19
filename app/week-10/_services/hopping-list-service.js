import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userID) {
    try {
        const items = [];
        const q = quer(collection(db, "users", userID, "items"));
        const itemsSnap = await getDocs(q);

        itemsSnap.forEach((doc) => {
            items.push({id: doc.id, ...doc.data()})
        });
        return items;

    }
    catch (error) {
        console.error("Error in getItems: ", error);
    }
}

export async function addItem(userID, item) {
    try {    
        const itemsCollection = collection(db, "users", userID, "items");
        const docRef = await addDoc(itemsCollection, item);
        return docRef.id;

      } catch (error) {
        console.error("Error in addItem:", error);
      }
}