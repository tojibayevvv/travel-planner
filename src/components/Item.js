import { Star, Trash2 } from "react-feather";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <button
        className="icon-button"
        onClick={() => onToggleItem(item.id)}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <Star
          size={24}
          color={item.packed ? "#fbbf24" : "#9ca3af"}
          fill={item.packed ? "#fbbf24" : "none"}
        />
      </button>
      <span style={item.packed ? { textDecoration: "line-through" } : null}>
        {item.quantity} {item.description}
      </span>
      <button
        className="delete-button"
        onClick={() => onDeleteItem(item.id)}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <Trash2 size={24} color="#52B788" />
      </button>
    </li>
  );
}