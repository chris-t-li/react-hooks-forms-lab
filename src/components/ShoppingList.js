import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("");
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Produce",
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(e) {
    setSearchItem(e.target.value.toLowerCase());
  }

  function handleNewItemChange(e) {
    const name = e.target.name
    setNewItem({ ...newItem, [name]: e.target.value, id: uuid() });
  }

  function onItemFormSubmit(e) {
    e.preventDefault();
    setItems([...items, newItem])
    setNewItem({
      name: "",
      category: "Produce",
    })
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchItem === "") {
      return true;
    } else if (selectedCategory === "All" && searchItem) {
      return item.name.toLowerCase().includes(searchItem);
    } else {
      return (item.category === selectedCategory && item.name.toLowerCase().includes(searchItem));
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm newItem={newItem} onItemFormSubmit={onItemFormSubmit} handleNewItemChange={handleNewItemChange} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} searchItem={searchItem} selectedCategory={selectedCategory} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
