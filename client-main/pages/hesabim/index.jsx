import { useState } from 'react';
import InputButton from '~/components/inputs/InputButton';
import SignInForm from '~/containers/SignInForm';
import SignUpForm from '~/containers/SignUpForm';

const AccountPage = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div>
      <div className=" flex mb-5">
        <div className=" w-full mr-2 ">
          <InputButton
            sizeIndex={2}
            label={'Login'}
            onClick={() => {
              setSelected(1);
            }}
            buttonColorIndex={selected === 1 ? 1 : 2}
            rounded
            center
          />
        </div>
        <div className=" w-full ml-2 ">
          <InputButton
            sizeIndex={2}
            label={'Sign up'}
            onClick={() => {
              setSelected(2);
            }}
            buttonColorIndex={selected === 2 ? 1 : 2}
            rounded
            center
          />
        </div>
      </div>
      {selected === 1 && <SignInForm redirect />}
      {selected === 2 && <SignUpForm redirect />}
    </div>
  );
};

export default AccountPage;
