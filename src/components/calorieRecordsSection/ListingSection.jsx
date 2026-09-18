import styles from "./ListingRecord.module.css";
import RecordList from "./RecordList";
import { useState } from "react";
import { getDateFromString } from "../../utils";

function ListingSection({ allRecords }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const dateChangeHandler = (event) => {
    setCurrentDate(getDateFromString(event.target.value));
  };

  const dateFilter = (record) => {
    return (
      record.date.getDate() === currentDate.getDate() &&
      record.date.getMonth() === currentDate.getMonth() &&
      record.date.getFullYear() === currentDate.getFullYear()
    );
  };

  return (
    <>
      <label className={styles["listing-picker-label"]} htmlFor="ListingDate">
        Select date
      </label>
      <input
        id="ListingDate"
        type="date"
        className={styles["listing-picker-input"]}
        value={currentDate.toISOString().split("T")[0]}
        onChange={dateChangeHandler}
      />
      <RecordList records={allRecords.filter(dateFilter)} />
    </>
  );
}
export default ListingSection;
