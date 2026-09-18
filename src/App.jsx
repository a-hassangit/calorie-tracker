import { useState } from "react";
import ListingSection from "./components/calorieRecordsSection/ListingSection";
import CaloriesRecordEdit from "./components/edit/CaloriesRecordEdit";
import Modal from "react-modal";
import styles from "./App.module.css";
import { getDateFromString } from "./utils";

const INITIAL_RECORDS = [
  {
    date: new Date(2023, 2, 1),
    meal: "Breakfast",
    content: "Eggs",
    calories: -220,
    id: 1,
  },
  {
    date: new Date(2023, 2, 2),
    meal: "Lunch",
    content: "Chicken",
    calories: 600,
    id: 2,
  },
  {
    date: new Date(2023, 2, 3),
    meal: "Dinner",
    content: "Cheese",
    calories: 200,
    id: 3,
  },
  {
    date: new Date(2023, 2, 4),
    meal: "Snacks",
    content: "Chocolate",
    calories: 500,
    id: 4,
  },
];
function App() {
  const [records, setRecords] = useState(INITIAL_RECORDS);
  const [nextId, setNextId] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none", // Remove the border
      padding: "0px", // Remove padding
      borderRadius: " var(--theme-border-radius-smooth)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formSubmitHandler = (record) => {
    const formattedRecord = {
      ...record,
      date: getDateFromString(record.date),
      id: nextId,
    };
    setNextId((lastVal) => lastVal + 1);
    setRecords((prevRecords) => [formattedRecord, ...prevRecords]);
    handleCloseModal();
  };
  return (
    <div className="App">
      <h1 className={styles.title}>Calorie Tracker</h1>{" "}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Modal"
        style={modalStyles}
      >
        <CaloriesRecordEdit
          onformSubmit={formSubmitHandler}
          onCancel={handleCloseModal}
        />
      </Modal>
      <ListingSection allRecords={records} />
      <button className={styles["open-modal-btn"]} onClick={handleOpenModal}>
        Track food
      </button>
    </div>
  );
}

export default App;
