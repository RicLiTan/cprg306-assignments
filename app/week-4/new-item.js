"use client";
import { useState } from "react";


export default function NewItem() 
{
    const [quantity, setQty] = useState(1);
    const [decrementEnabled, decrementIsEnabled] = useState(false);
    const [incrementEnabled, incrementIsEnabled] = useState(true);


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

    

    return (
        <main class = "flex justify-center w-full">
            <div class = "p-2 m-4 bg-white text-white w-36">
                <div class = "flex justify-between">
                    <p class = "text-black">{quantity}</p>
                    <div class = "flex gap-2">
                        <button type = "button" class = "w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75" onClick = {decrement} disabled = {!decrementEnabled}>-</button>
                        <button type = "button" class = "w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400  disabled:bg-gray-400 focus:ring-opacity-75 ml-1" onClick = {increment} disabled = {!incrementEnabled}>+</button>
                    </div>
                </div>
            </div>
        </main>
    )

}