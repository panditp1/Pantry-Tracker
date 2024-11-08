// app/vegetables/page.js
"use client";

import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function VegetablesPage() {
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    const fetchVegetables = async () => {
      const vegetablesCollection = query(
        collection(db, 'pantryItems'),
        where('category', '==', 'vegetables') // Ensure 'vegetables' matches exactly with Firebase
      );
      const vegetableSnapshot = await getDocs(vegetablesCollection);
      setVegetables(vegetableSnapshot.docs.map(doc => doc.data()));
    };
    fetchVegetables();
  }, []);

  return (
    <div>
      <h2>Vegetables in Pantry</h2>
      <ul>
        {vegetables.map((vegetable, index) => (
          <li key={index}>
            {vegetable.name} - {vegetable.quantity} in stock
          </li>
        ))}
      </ul>
    </div>
  );
}
