import React from "react";
import PropTypes from "prop-types";
import "./HabitCard.css";

function HabitCard(props) {
  const { title, description, progress, onIncrement, onDelete } = props;

  return (
    <div className="habit-card">
      <div className="habit-card__info">
        <h2 className="habit-card__title">{title}</h2>
        <p className="habit-card__description">{description}</p>
      </div>
      <div className="habit-card__action">
        <button className="button" onClick={onIncrement}>
          +
        </button>
        <span className="habit-card__progress">{progress}</span>
        <button className="button" onClick={onDelete}>
          x
        </button>
      </div>
    </div>
  );
}

HabitCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default HabitCard;
