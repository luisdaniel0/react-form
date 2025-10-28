import Button from "./Button";
export default function Review({ formData, handlePrev }) {
  return (
    <>
      <div className="container">
        <h1 className="reviewHeader">Review Your Information</h1>
        <div className="reviewDetails">
          <div className="reviewName">{`Name: ${formData.fullName}`}</div>
          <div className="reviewEmail">{`E-mail: ${formData.email}`}</div>
          <div className="reviewAddress">{`Address: ${formData.address}, ${formData.city}, ${formData.zipCode}`}</div>
        </div>
        <Button handlePrev={handlePrev} />
      </div>
    </>
  );
}
