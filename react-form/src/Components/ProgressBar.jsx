const ProgressBar = ({ currentStep }) => {
  const steps = [1, 2, 3];
  return (
    <div className="steps">
      {steps.map((step) => {
        return (
          <div key={step} className="step">
            {step}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
