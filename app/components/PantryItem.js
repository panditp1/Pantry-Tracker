// app/components/PantryItem.js
import { motion } from 'framer-motion';

export default function PantryItem({ name, quantity }) {
  return (
    <motion.div
      className="pantry-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
    </motion.div>
  );
}
