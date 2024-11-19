"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import MealIdeas from "./meal-ideas";




export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    
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
            <h1 className = "p-4 text-3xl font-bold m-2">Shopping List</h1>
            <div className = "flex">
                <div>
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList items = {items} onItemSelect={handleItemSelect}/>
                </div>
                <MealIdeas ingredient = {selectedItemName}/>
            </div>
        </main>
    );
}