import { Package } from "react-feather";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <Package
          size={32}
          style={{ marginRight: "1rem", verticalAlign: "middle" }}
        />
        <em>Let's pack stuff for your trip</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <Package
        size={32}
        style={{ marginRight: "1rem", verticalAlign: "middle" }}
      />
      <em>
        {percentage === 100
          ? "You packed everything! You are ready to go"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} items (${percentage}%)`}
      </em>
    </footer>
  );
}
