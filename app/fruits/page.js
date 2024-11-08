"use client";

import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import './fruits.css';


export default function FruitsPage() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchFruits = async () => {
      const fruitsCollection = query(
        collection(db, 'pantryItems'),
        where('category', '==', 'fruits')
      );
      const fruitSnapshot = await getDocs(fruitsCollection);
      setFruits(fruitSnapshot.docs.map(doc => doc.data()));
    };
    fetchFruits();
  }, []);

  return (
    <div className = "fruits-container">
      <h2>Fruits in Pantry</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit.name} - {fruit.quantity} in stock
          </li>
        ))}
      </ul>
    </div>
  );
}
