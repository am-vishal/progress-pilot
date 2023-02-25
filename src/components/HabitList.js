import React from "react";
import Habit from "./Habit";

function HabitList() {
  const habits = [
    {
      id: 1,
      name: "Drink 8 glasses of water",
      frequency: "daily",
      done: false,
    },
    {
      id: 2,
      name: "Meditate for 10 minutes",
      frequency: "daily",
      done: false,
    },
    {
      id: 3,
      name: "Go for a 30-minute walk",
      frequency: "3 times a week",
      done: true,
    },
  ];

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit} />
      ))}
    </div>
  );
}

export default HabitList;
