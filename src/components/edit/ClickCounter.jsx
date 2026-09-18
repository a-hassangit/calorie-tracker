function ClickCounter(props) {
  const { setClickCounter } = props; // = props.setClickCounter => setClickCounter

  const onClickHandler = () => {
    setClickCounter((previousValue) => previousValue + 1);
    console.log("Clicked");
  };

  return (
    <button type="button" onClick={onClickHandler}>
      ClickMe
    </button>
  );
}

export default ClickCounter;
