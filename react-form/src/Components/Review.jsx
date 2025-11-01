import Button from "./Button";
import ProgressBar from "./ProgressBar";
export default function Review({
  formData,
  handlePrev,
  showPrevious,
  currentStep,
}) {
  return (
    <>
      <div className="formContainer">
        <ProgressBar currentStep={currentStep} />
        <h1 className="formHeader">Review Your Information</h1>
        <div className="reviewDetails">
          <div className="reviewName">{`Name: ${formData.fullName}`}</div>
          <div className="reviewEmail">{`E-mail: ${formData.email}`}</div>
          <div className="reviewAddress">{`Address: ${formData.address}, ${formData.city}, ${formData.zipCode}`}</div>
        </div>
        <Button handlePrev={handlePrev} showPrevious={showPrevious} />
      </div>
    </>
  );
}
