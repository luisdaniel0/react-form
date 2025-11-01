import React from "react";
const ProgressBar = ({ currentStep }) => {
  const steps = [1, 2, 3];

  return (
    <div className="steps">
      {steps.map((step) => {
        return (
          <React.Fragment key={step}>
            <div
              className={`step ${currentStep > step ? "completed" : ""} ${
                currentStep === step ? "active" : ""
              } ${currentStep < step ? "incomplete" : ""}`}
            >
              {step}
            </div>
            {step < steps.length && (
              <div
                key={`connector-${step}`} // Add this!
                className={`connector ${currentStep > step ? "completed" : ""}`}
              ></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressBar;

//add styling depending on what step we're in the array.
//compare currentstep to the individual step in the steps array
