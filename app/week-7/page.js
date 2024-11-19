"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"




export default function Page() {
    const [items, setItems] = useState(itemsData);

    
    const handleAddItem = (name, quantity, category, id) => {
        const newItem = {
            name,
            quantity,
            category,
            id
        };

        setItems([...items, newItem]);
    };  

    return (
        <main>
            <h1 className = "p-4 text-3xl font-bold m-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items = {items}/>
        </main>
    );
}