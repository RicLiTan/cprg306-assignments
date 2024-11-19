"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context.js";




export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');
    const {user} = useUserAuth();

    
    const handleAddItem = (name, quantity, category, id) => {
        const newItem = {
            name,
            quantity,
            category,
            id
        };

        setItems([...items, newItem]);
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