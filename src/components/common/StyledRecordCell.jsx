import styles from "./StyledRecordCell.module.css";

function StyledRecordCell({ children }) {
  return <div className={styles["styled-record-cell"]}>{children}</div>;
}

export default StyledRecordCell;
