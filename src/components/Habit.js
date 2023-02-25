import React from "react";

function Habit({ habit }) {
  const { name, frequency, done } = habit;

  return (
    <div className={`habit ${done ? "habit-done" : ""}`}>
      <h2>{name}</h2>
      <p>Frequency: {frequency}</p>
      <button className="habit-button">{done ? "Done" : "Not Done"}</button>
    </div>
  );
}

export default Habit;
