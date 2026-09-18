import styles from "./CalorieRecord.module.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledRecordCell from "../common/StyledRecordCell";

function CalorieRecord({ date, meal, content, calories }) {
  return (
    <ul className={styles.record}>
      <li>
        <CalorieRecordDate date={date} />
      </li>
      <li>{meal}</li>
      <li>{content}</li>
      <StyledRecordCell>
        <li className={styles["record-calories"]}>{calories}</li>
      </StyledRecordCell>
    </ul>
  );
}

export default CalorieRecord;
