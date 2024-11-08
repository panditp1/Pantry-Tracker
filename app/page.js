"use client";

import { useState } from 'react';
import Link from 'next/link';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function HomePage() {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');

  const handleAddItem = async (e) => {
    e.preventDefault();
    const category = determineCategory(itemName);
    const newItem = { name: itemName, quantity: Number(quantity), category };

    try {
      await addDoc(collection(db, 'pantryItems'), newItem);
      setMessage(`${quantity} ${itemName}(s) added to the pantry successfully!`);
      setItemName('');
      setQuantity('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage("Failed to add item, please try again.");
    }
  };

  const determineCategory = (name) => {
    const fruits = ['mango', 'apple', 'banana', 'orange'];
    const vegetables = ['carrot', 'potato', 'spinach', 'tomato'];
    const grains = ['rice', 'wheat', 'oats', 'barley'];
    const dairy = ['milk', 'cheese', 'yogurt', 'butter'];
    if (fruits.includes(name.toLowerCase())) return 'fruits';
    if (vegetables.includes(name.toLowerCase())) return 'vegetables';
    if (grains.includes(name.toLowerCase())) return 'grains';
    if (dairy.includes(name.toLowerCase())) return 'dairy';
    return 'others';
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="ahilekolagi">
        <div className="content">
          <h1>Welcome to Your Pantry Tracker</h1>
          <p>Manage your pantry items here!</p>

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

          {message && (
            <div className="popup-message">
              {message}
            </div>
          )}
        </div>

        <p className="pantry-message">Look at your pantry below or customize it to fit your needs!</p>

        {/* Pantry categories with links */}
        <section className="pantry-categories">
          <div className="category-grid">
            <Link href="/fruits" className="category-box fruits">
              <span className="emoji">🍍</span>
              <span className="emoji">🍎</span>
              <span className="emoji">🥭</span>
              Fruits
            </Link>
            <Link href="/vegetables" className="category-box vegetables">
              <span className="emoji">🥔</span>
              <span className="emoji">🥕</span>
              <span className="emoji">🍅</span>
              Vegetables
            </Link>
            <Link href="/grains" className="category-box grains">
              <span className="emoji">🌾</span>
              <span className="emoji">🍞</span>
              <span className="emoji">🥐</span>
              Grains
            </Link>
            <Link href="/dairy" className="category-box dairy">
              <span className="emoji">🥛</span>
              <span className="emoji">🧀</span>
              <span className="emoji">🍦</span>
              Dairy
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
