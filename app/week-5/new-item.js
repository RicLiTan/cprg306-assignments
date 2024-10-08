"use client";
import { useState } from "react";


export default function NewItem() 
{
    const [quantity, setQty] = useState(1);
    const [decrementEnabled, decrementIsEnabled] = useState(false);
    const [incrementEnabled, incrementIsEnabled] = useState(true);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");


    const increment = () => {
        if (quantity == 20) {
            incrementIsEnabled(!incrementEnabled);
        } 
        else {
            setQty(quantity + 1);
            if (quantity == 19) {
                incrementIsEnabled(!incrementEnabled);
            } 
            if (decrementEnabled) {

            }
            else {
                decrementIsEnabled(!decrementEnabled);
            }
        }
    }

    const decrement = () => {
        if (quantity ==  1) {
            decrementIsEnabled(!decrementEnabled);
        }
        else {
            setQty(quantity - 1);
            if (quantity ==  2) {
                decrementIsEnabled(!decrementEnabled);
            }
            if (incrementEnabled){

            }
            else {
                incrementIsEnabled(!incrementEnabled);
            }
        }
    }

    const getItemName = (event) => {
        setName(event.target.value);
    }

    const getCategory = (event) => {
        setCategory(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Added item: " + name + ", quantity: " + quantity + ", category: " + category);
        setName("");
        setQty(quantity - quantity + 1);
        if (decrementEnabled)
        {
            decrementIsEnabled(!decrementEnabled);
        }
        if (!incrementEnabled)
        {
            incrementIsEnabled(!incrementEnabled);
        }
        setCategory("Produce");
        event.target.reset();
    };

    return (
        <main class>
            <div class  = "flex justify-center w-full mt-12">
                <form class = "mb-2" onSubmit={handleSubmit}>
                    <div class = "input">
                        <input type = "text" placeholder="item name" required class = "p-2 m-4 bg-white text-black w-80 rounded-lg font-sans"  onChange={(event) => getItemName(event)}></input>
                    </div>
                    <div class = "flex">
                        <div class = "p-2 m-4 bg-white w-36 rounded-lg">
                            <div class = "flex justify-between">
                                <p class = "text-black">{quantity}</p>
                                <div class = "flex gap-2">
                                    <button type = "button" class = "w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75" onClick = {decrement} disabled = {!decrementEnabled}>-</button>
                                    <button type = "button" class = "w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400  disabled:bg-gray-400 focus:ring-opacity-75 ml-1" onClick = {increment} disabled = {!incrementEnabled}>+</button>
                                </div>
                            </div>
                        </div>
                        <select class = "p-2 m-4 bg-white text-black w-36 rounded-lg" name = "Category" onChange={(event) => getCategory(event)}>
                            <optgroup label="Category">
                                <option value = "Produce">Produce</option>
                                <option value = "Dairy">Dairy</option>
                                <option value = "Bakery">Bakery</option>
                                <option value = "Meat">Meat</option>
                                <option value = "Frozen Foods">Frozen Foods</option>
                                <option value = "Canned Goods">Canned Goods</option>
                                <option value = "Dry Goods">Dry Goods</option>
                                <option value = "Beverages">Beverages</option>
                                <option value = "Snacks">Snacks</option>
                                <option value = "Household">Household</option>
                                <option value = "Other">Other</option>
                            </optgroup>
                        </select>
                    </div>

                    <button type = "submit" class = "p-2 m-4 bg-blue-500 text-white w-80 rounded-lg">+</button>
                </form>
            </div>
        </main>
    )

}