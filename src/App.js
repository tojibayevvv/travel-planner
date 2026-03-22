import React from "react";

export default function App() {
  return (
    <>
      <Logo />
      <Form />
      <ItemsList />
      <Stats />
    </>
  );
}

function Logo() {
  return <h1>Far away</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>what do you need for your trip?</h3>
    </div>
  );
}
function ItemsList() {
  return <div className="list">List</div>
}
function Stats() {
  return <footer>You have X items on your list, and you already packed X items (X%)</footer>
}
