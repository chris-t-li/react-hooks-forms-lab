import React from "react";

function ItemForm({ onItemFormSubmit, handleNewItemChange, newItem }) {

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItemChange} value={newItem.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewItemChange} value={newItem.category} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
