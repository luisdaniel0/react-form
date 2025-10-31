const ProgressBar = ({ currentStep }) => {
  const steps = [1, 2, 3];

  return (
    <div className="steps">
      {steps.map((step) => {
        return (
          <>
            <div
              key={step}
              className={`step ${currentStep > step ? "completed" : ""} ${
                currentStep === step ? "active" : ""
              } ${currentStep < step ? "incomplete" : ""}`}
            >
              {step}
            </div>
            {step < steps.length && <div className="connector"></div>}
          </>
        );
      })}
    </div>
  );
};

export default ProgressBar;

//add styling depending on what step we're in the array.
//compare currentstep to the individual step in the steps array
