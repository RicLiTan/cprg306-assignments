"use client";
import { useState } from "react";
import item from "./item";

export default function ItemList({items}) {
  const itemData = items;

  const [sortBy, setSortBy] = useState("name");

  const [color, setColor] = useState("bg-blue-700");

  var groceryList = item(itemData, sortBy);

  const sortChange = (event) => {
    setSortBy(event.target.innerText.toLowerCase());
  };


  return (
    <main>
        <div>
          <label className = "p-2 m-4 max-w-md">Sort by:
            <button className = {`cursor-pointer hover:bg-blue-700 ${sortBy === "name" ? "bg-blue-700" : "bg-blue-500"} p-4 rounded ml-10 w-28`} onClick={(event) => sortChange(event)}>Name</button>
            <button className = {`cursor-pointer hover:bg-blue-700 ${sortBy === "category" ? "bg-blue-700" : "bg-blue-500"} p-4 rounded ml-10 w-28`} onClick={(event) => sortChange(event)}>Category</button>
          </label>
        </div>
          {groceryList}
    </main>
  )
}