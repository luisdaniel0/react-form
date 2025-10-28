export default function Button({ onClick, handlePrev, showPrevious }) {
  return (
    <div className="buttonContainer">
      {showPrevious && (
        <button className="prevButton" onClick={handlePrev}>
          Previous
        </button>
      )}
      <button onClick={onClick} className="nextButton">
        Next
      </button>
    </div>
  );
}
