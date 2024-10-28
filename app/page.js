// app/page.js
"use client";

import { useState } from 'react';
import PantryItem from './components/PantryItem';

export default function HomePage() {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pantryItems, setPantryItems] = useState([]);

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = { name: itemName, quantity: Number(quantity) };
    setPantryItems([...pantryItems, newItem]);
    setItemName('');
    setQuantity('');
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to Your Pantry Tracker</h1>
        <p>Manage your pantry items here!</p>


        {/* Form to add new pantry items */}
        <form onSubmit={handleAddItem}>
          <input
            type="text"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          <button type="submit">Add Item</button>
        </form>

        {/* Display the list of pantry items */}
        <div>
          {pantryItems.map((item, index) => (
            <PantryItem key={index} name={item.name} quantity={item.quantity} />
          ))}
        </div>
      </div>
    </>
  );
}
