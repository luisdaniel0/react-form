export default function Button({ onClick }) {
  return (
    <>
      <button className="prevButton">Previous</button>
      <button onClick={onClick} className="nextButton">
        Next
      </button>
    </>
  );
}
