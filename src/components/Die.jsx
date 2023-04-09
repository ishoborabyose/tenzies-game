const Die = ({ isHeld, holdDice, value }) => {
  return (
    <div className={`die-face  ${isHeld ? "bg1" : "bg2"}`} onClick={holdDice}>
      <h2 className="die-num">{value}</h2>
    </div>
  );
};

export default Die;
