"use client";
import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context.js";
import { addItem, getItems } from "../_services/hopping-list-service";




export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const {user} = useUserAuth();

    async function loadItems()
    {
        try {
          if (user?.uid) {
            const fetchedItems = await getItems(user.uid);
            setItems(fetchedItems);
          }
        } catch (error) {
          console.error("Error in loadItems:", error);
        }
      }

    useEffect(() => {
        loadItems();
    }, []);

    
    const handleAddItem = async (newItem) => {
        try {
            if (user?.uid) {
              const itemID = await addItem(user.uid, newItem);
              setItems([...items, { id: itemID, ...newItem }]);
            }
          } catch (error) {
            console.error("Error in loadItems:", error);
        }

    };  

    const handleItemSelect = (itemName) => {
        const trimmedItem = itemName.split(",")[0].trim().toLowerCase().replace(/[^a-zA-Z ]/g, "");
        setSelectedItemName(trimmedItem);
    };

    return (
        
        <main>
            {user ? (
            <> 
            <h1 className = "p-4 text-3xl font-bold m-2">Shopping List</h1>
            <div className = "flex">
                <div>
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList items = {items} onItemSelect={handleItemSelect}/>
                </div>
                <MealIdeas ingredient = {selectedItemName}/>
            </div>
            </>
            ) : (<p>You need to be signed in to view this content</p>)}
        </main>
    );
}