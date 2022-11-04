import { createContext } from 'react';
import StatesAndFuntions from './treatmentPlanningContext';

export const PlanningContext = createContext();

//gives all here the childern the given states and function
//made to be used the treatment planning

const WizardPlanningContext = ({ children }) => {
  return (
    <PlanningContext.Provider value={StatesAndFuntions()}>
      {children}
    </PlanningContext.Provider>
  );
};

export default WizardPlanningContext;
