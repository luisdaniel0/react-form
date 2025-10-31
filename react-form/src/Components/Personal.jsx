import Button from "./Button";
import ProgressBar from "./ProgressBar";
export default function Personal({
  formData,
  handleChange,
  errors,
  handleNext,
  showPrevious,
  currentStep,
}) {
  return (
    <>
      <div className="formContainer">
        <ProgressBar currentStep={currentStep} />
        <h1 className="formHeader">Personal Information</h1>
        <form className="form">
          <div className="fullNameDiv">
            <label>
              Full Name *
              <input
                name="fullName"
                type="text"
                placeholder="John Smith"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <span style={{ color: "red", display: "block" }}>
                  {errors.fullName}
                </span>
              )}
            </label>
          </div>
          <div className="emailDiv">
            <label>
              E-mail *
              <input
                type="email"
                placeholder="johnsmith@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span style={{ color: "red", display: "block" }}>
                  {errors.email}
                </span>
              )}
            </label>
          </div>
          <div className="passwordDiv">
            <label>
              Password*
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span style={{ color: "red", display: "block" }}>
                  {errors.password}
                </span>
              )}
            </label>
          </div>
        </form>
        <Button onClick={handleNext} showPrevious={showPrevious} />
      </div>
    </>
  );
}
