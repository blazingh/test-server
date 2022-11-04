import Chevron from '~/components/icons/Chevron';
import classNames from './styles';
//
//a step progress bar for visulizing the steps
//params : steps || a list of step object [{step: step number, name: "step name"}, ... ]
//         stepNum || the current step number
//         onBack || a function that triggers when pressing the bach button
//         classname || a calass name that will be apllied to the root element/container
//
const StepProgressBar = ({ steps, stepNum = 1, onBack, className }) => {
  return (
    steps && (
      <div className={classNames.stepProgressBarContainer + className}>
        <div className={classNames.stepProgressBarFade} />
        <Chevron
          onClick={onBack}
          className={classNames.stepProgressBarChevron}
        />
        {steps.map((step, index) => (
          <div
            key={index}
            className={
              classNames.stepProgressBarStep +
              (index >= stepNum - 1
                ? ' opacity-100 max-h-20 max-w-xs ml-1'
                : ' opacity-0 max-w-0 max-h-0')
            }
          >
            <div
              className={
                stepNum - 1 === index
                  ? classNames.stepProgressBarNumSelected
                  : classNames.stepProgressBarNum
              }
            >
              {index + 1}
            </div>
            <a
              className={
                stepNum - 1 === index
                  ? classNames.stepProgressBarNameSelected
                  : classNames.stepProgressBarName
              }
            >
              {step?.name}
            </a>
          </div>
        ))}
      </div>
    )
  );
};

export default StepProgressBar;
