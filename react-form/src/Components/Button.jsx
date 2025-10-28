export default function Button({ onClick, handlePrev }) {
  return (
    <div className="buttonContainer">
      <button className="prevButton" onClick={handlePrev}>
        Previous
      </button>
      <button onClick={onClick} className="nextButton">
        Next
      </button>
    </div>
  );
}
