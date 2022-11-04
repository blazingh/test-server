import { createContext } from 'react';
import { StatesAndFuntions } from './UserAuthContext';

export const AuthContext = createContext();

//gives all here the childern the given states and function
//made to be used in the _app.js

const UserAuthContext = ({ children }) => {
  return (
    <AuthContext.Provider value={StatesAndFuntions()}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserAuthContext;
