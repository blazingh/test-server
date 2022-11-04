import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { cloneElement, isValidElement, useEffect, useState } from 'react';
import StepProgressBar from '~/components/StepProgressBar';
import routes from '~/constants/routes/routes';
import WizardPlanningContext from '~/contexts/TreatmentPlanning';
import useLocalRouter from '~/hooks/useLocaleRouter/useLocaleRouter';

const WizardFrom = ({
  steps,
  initialValues = {},
  initialStep = 1,
  children,
  handleSubmit,
  onStepChange,
  urlSteps,
}) => {
  const router = useRouter();
  const { localePush } = useLocalRouter();
  const [stepNum, setStep] = useState(initialStep);
  const values = initialValues;

  const [prevQuery, setPrevQuery] = useState({});

  const nextStep = () => {
    setStep((p) => p < steps.length && p + 1);
  };

  const prevStep = () => {
    setStep((p) => (p <= 1 ? 1 : p - 1));
  };

  const onBackButton = () => {
    if (urlSteps) {
      if (stepNum > 1) {
        router.back();
      } else {
        localePush(routes.mainPage);
      }
    } else {
      prevStep();
    }
  };

  const onSubmit = (values) => {
    if (stepNum === steps.length) {
      handleSubmit(values);
    } else {
      nextStep();
    }
  };

  useEffect(() => {
    if (!urlSteps) return;
    if (Object.keys(router.query).length < Object.keys(prevQuery).length) {
      prevStep();
    }
    setPrevQuery(router.query);
  }, [router.query]);

  useEffect(() => {
    onStepChange && onStepChange(stepNum);
  }, [stepNum, onStepChange]);

  console.log(children[0]);

  return (
    <div>
      <StepProgressBar
        steps={steps}
        stepNum={stepNum}
        onBack={onBackButton}
        className="mb-2"
      />
      <WizardPlanningContext>
        <Formik initialValues={values} onSubmit={onSubmit}>
          <Form>
            {children.map((step) => cloneElement(step, { visible: true }))}
            {steps.map(
              (step, index) =>
                isValidElement(step) &&
                cloneElement(step, { visible: stepNum == index - 1 }, null)
            )}
            {/* {children.map((child, index) => index == stepNum - 1 && child)} */}
            {/* {Array.isArray(children) ? children?.[step - 1] : children} */}
          </Form>
        </Formik>
      </WizardPlanningContext>
    </div>
  );
};

export default WizardFrom;
