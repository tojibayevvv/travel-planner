import React, { useState } from "react";
import { Star, Trash2, Package } from "react-feather";
import Logo from "./components/Logo";
import Form from "./components/Form";
import ItemsList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    const confirm = window.confirm("Are you sure to clear all items?");

    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ItemsList
        onToggleItem={handleToggleItem}
        items={items}
        onDeleteItem={handleDeleteItem}
        onClearItems={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

