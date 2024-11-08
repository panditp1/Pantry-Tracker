"use client";

import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function DairyPage() {
  const [dairyItems, setDairyItems] = useState([]);

  useEffect(() => {
    const fetchDairyItems = async () => {
      const dairyCollection = query(
        collection(db, 'pantryItems'),
        where('category', '==', 'dairy')
      );
      const dairySnapshot = await getDocs(dairyCollection);
      setDairyItems(dairySnapshot.docs.map(doc => doc.data()));
    };
    fetchDairyItems();
  }, []);

  return (
    <div>
      <h2>Dairy in Pantry</h2>
      <ul>
        {dairyItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} in stock
          </li>
        ))}
      </ul>
    </div>
  );
}
