import styles from "./RecordList.module.css";
import CalorieRecord from "./CalorieRecord";
import ListingRecord from "./ListingSection";

function RecordList({ records }) {
  return records?.length ? (
    <ul className={styles["record-list"]}>
      {records.map(
        (record) =>
          record.calories >= 0 && (
            <li className={styles["record-item"]} key={record.id}>
              <CalorieRecord
                date={record.date}
                meal={record.meal}
                content={record.content}
                calories={record.calories}
              />
            </li>
          ),
      )}
    </ul>
  ) : (
    <div className={styles.placeholder}>No records found for this date</div>
  );
}

export default RecordList;
