import { useRouter } from 'next/router';
import routes from '~/constants/routes/routes';
import words from '~/constants/text/words';
import SvgBox from '../icons/Box';
import SvgCalendar from '../icons/Calendar';
import SvgHeart from '../icons/heart';
import SvgHome from '../icons/Home';
import SvgUserCircle from '../icons/UserCircle';
import TranslatedLink from '../TranslatedLink';
import classNames from './styles';

const UserFooter = () => {
  const { route, locale } = useRouter();

  console.log(locale);

  const homeRoutes = [routes.mainPage];
  const profileRoutes = [routes.profile];

  return (
    <div className=" w-full bg-gray-100 h-16 bottom-0 fixed px-4 py-2 z-20 ">
      <div className=" w-full h-full  max-w-2xl flex justify-between items-center mx-auto">
        <TranslatedLink href={routes.mainPage}>
          <div
            className={
              classNames.footerItem +
              (homeRoutes.includes(route) ? ' text-blue ' : 'text-gray-400')
            }
          >
            <SvgHome
              // className=" stroke-gray-500 stroke-1 "
              width={24}
              height={24}
            />{' '}
            {words[locale].home}
          </div>
        </TranslatedLink>
        <div
          className={
            classNames.footerItem +
            (route === 'favorites' ? ' text-blue ' : 'text-gray-400')
          }
        >
          <SvgHeart width={24} height={24} /> {words[locale].favorites}
        </div>
        <div
          className={
            classNames.footerItem +
            (route === '/apointment' ? ' text-blue ' : 'text-gray-400')
          }
        >
          <SvgCalendar width={24} height={24} /> {words[locale].appointment}
        </div>
        <div
          className={
            classNames.footerItem +
            (route === '/orders' ? ' text-blue ' : 'text-gray-400')
          }
        >
          <SvgBox width={24} height={24} /> {words[locale].orders}
        </div>
        <TranslatedLink href={routes.profile}>
          <div
            className={
              classNames.footerItem +
              (profileRoutes.includes(route) ? ' text-blue ' : 'text-gray-400')
            }
          >
            <SvgUserCircle width={24} height={24} /> {words[locale].profile}
          </div>
        </TranslatedLink>
      </div>
    </div>
  );
};

export default UserFooter;
