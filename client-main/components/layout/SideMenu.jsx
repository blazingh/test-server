import { useRouter } from 'next/router';
import { useContext } from 'react';
import routes from '~/constants/routes/routes';
import words from '~/constants/text/words';
import { AuthContext } from '~/contexts/Auth';
import useLocalRouter from '~/hooks/useLocaleRouter/useLocaleRouter';
import SvgClose from '../icons/Close';
import SvgLogo from '../icons/Logo';
import InputButton from '../inputs/InputButton';
import classNames from './styles';

const SideMenu = ({ menuVisible, close }) => {
  const [{ user }, { signOut }] = useContext(AuthContext);
  const { localePush } = useLocalRouter();
  const { locale, pathname } = useRouter();
  return (
    <div>
      {/* background fade */}
      {menuVisible && <div className={classNames.sideMenuBackgound}></div>}
      <div
        className={
          classNames.sideMenu +
          (menuVisible
            ? ' translate-x-0 opacity-100 '
            : ' translate-x-full opacity-0 ')
        }
      >
        {/* side menu header */}
        <div className=" w-full dis-bg-gradient p-4 relative ">
          {/* when user is loged in */}
          {user ? (
            <div className={classNames.sideMenuHeader}>
              {/* user name */}
              <div className="mb-8 h-9">{user.name + ' ' + user.surname}</div>
              {/* profile button */}
              <div className=" flex gap-2 ">
                <InputButton
                  rounded
                  center
                  label={words[locale].profile}
                  sizeIndex={3}
                  buttonColorIndex={7}
                  onClick={() => {
                    close();
                    localePush(routes.profile);
                  }}
                />
                {/* sign out button */}
                <InputButton
                  rounded
                  center
                  label="signOut"
                  sizeIndex={3}
                  buttonColorIndex={8}
                  onClick={signOut}
                />
              </div>
            </div>
          ) : (
            // when the is no user
            <div className={classNames.sideMenuHeader}>
              {/* logo icon */}
              <div
                className="mb-8 h-9 "
                onClick={() => {
                  localePush(routes.mainPage);
                }}
              >
                <SvgLogo white className="cursor-pointer" />
              </div>
              <div className=" flex gap-2 ">
                {/* sign in button */}
                <InputButton
                  rounded
                  center
                  label={'sign in'}
                  sizeIndex={3}
                  buttonColorIndex={7}
                  onClick={() => {
                    close();
                    localePush(routes.signIn, { redirect: pathname });
                  }}
                />
                {/* sign up button */}
                <InputButton
                  rounded
                  center
                  label="sign Up"
                  sizeIndex={3}
                  buttonColorIndex={7}
                  onClick={() => {
                    close();
                    localePush(routes.signUp, { redirect: pathname });
                  }}
                />
              </div>
            </div>
          )}
          {/* close button */}
          <SvgClose
            width={28}
            height={28}
            color={'white'}
            className={classNames.sideMenuClose}
            onClick={close}
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
