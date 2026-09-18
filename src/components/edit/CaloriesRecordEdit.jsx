import { useState } from "react";
//import ClickCounter from "./ClickCounter";
import styles from "./CaloriesRecordEdit.module.css";

function CaloriesRecordEdit({ onformSubmit, onCancel }) {
  const DEFAULT_VALUE = {
    date: "",
    meal: "Breakfast",
    content: "",
    calories: "",
  };
  const [recordObject, setRecordObject] = useState(DEFAULT_VALUE);
  //const [clickCounter, setClickCounter] = useState(0);

  const onDateChangeHandler = (event) => {
    setRecordObject({
      ...recordObject,
      date: event.target.value,
    });
  };
  const onMealChangeHandler = (event) => {
    setRecordObject({
      ...recordObject,
      meal: event.target.value,
    });
  };
  const onContentChangeHandler = (event) => {
    setRecordObject({
      ...recordObject,
      content: event.target.value,
    });
  };
  const onCaloriesChangeHandler = (event) => {
    setRecordObject({
      ...recordObject,
      calories: event.target.value,
    });
  };

  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    onformSubmit(recordObject);
    setRecordObject(DEFAULT_VALUE);
  };

  const onCancelHandler = () => {
    setRecordObject(DEFAULT_VALUE);
    onCancel();
  };

  return (
    <form className={styles.form} onSubmit={onSubmitFormHandler}>
      {/* <div>
        <label> time:{clickCounter}</label>
      </div> */}
      <label htmlFor="date">Date: </label>
      <input
        type="date"
        id="date"
        value={recordObject.date}
        onChange={onDateChangeHandler}
      />

      <label htmlFor="meal">Meal: </label>
      <select
        id="meal"
        value={recordObject.meal}
        onChange={onMealChangeHandler}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>

      <label htmlFor="content">Content: </label>
      <input
        type="text"
        id="content"
        value={recordObject.content}
        onChange={onContentChangeHandler}
      />

      <label htmlFor="calories">Calories: </label>
      <input
        type="number"
        id="calories"
        value={recordObject.calories}
        onChange={onCaloriesChangeHandler}
        className={`${styles["calories-input"]} ${recordObject.calories < 0 ? styles.error : ""} `}
      />

      <div className={styles.footer}>
        <button>Add Record</button>
        <button
          className={styles.secondary}
          type="button"
          onClick={onCancelHandler}
        >
          Cancel
        </button>
        {/* <ClickCounter setClickCounter={setClickCounter}></ClickCounter> */}
      </div>
    </form>
  );
}

export default CaloriesRecordEdit;
