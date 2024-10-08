"use client";
import { useState } from "react";
import item from "./item";

export default function ItemList() {
  const itemData = Object.values(require("./items.json"));

  const [sortBy, setSortBy] = useState("name");

  const [color, setColor] = useState("bg-blue-700");

  var groceryList = item(itemData, sortBy);

  const sortChange = (event) => {
    setSortBy(event.target.innerText.toLowerCase());
  };


  return (
    <main>
        <h1 className = "p-4 text-3xl font-bold m-2">Shopping List</h1>
        <div>
          <label class = "p-2 m-4 max-w-md">Sort by:
            <button class = {`cursor-pointer hover:bg-blue-700 ${sortBy === "name" ? "bg-blue-700" : "bg-blue-500"} p-4 rounded ml-10 w-28`} onClick={(event) => sortChange(event)}>Name</button>
            <button class = {`cursor-pointer hover:bg-blue-700 ${sortBy === "category" ? "bg-blue-700" : "bg-blue-500"} p-4 rounded ml-10 w-28`} onClick={(event) => sortChange(event)}>Category</button>
          </label>
        </div>
          {groceryList}
    </main>
  )
}