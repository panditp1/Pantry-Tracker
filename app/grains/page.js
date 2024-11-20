// app/grains/page.js
"use client";

import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import '../styles/categories.css';

export default function GrainsPage() {
  const [grains, setGrains] = useState([]);

  useEffect(() => {
    const fetchGrains = async () => {
      const grainsCollection = query(
        collection(db, 'pantryItems'),
        where('category', '==', 'grains') // Ensure 'grains' matches Firebase entry exactly
      );
      const grainSnapshot = await getDocs(grainsCollection);
      setGrains(grainSnapshot.docs.map(doc => doc.data()));
    };
    fetchGrains();
  }, []);

  return (
    <div>
      <h2>Grains in Pantry</h2>
      <ul>
        {grains.map((grain, index) => (
          <li key={index}>
            {grain.name} - {grain.quantity} in stock
          </li>
        ))}
      </ul>
    </div>
  );
}
