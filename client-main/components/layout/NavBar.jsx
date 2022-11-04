import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router.js';
import { useEffect, useState } from 'react';
import SearchBar from '~/components/SearchBar/index.jsx';
import routes from '~/constants/routes/routes.js';
import text from '~/constants/text/phrases.js';
import cart from '~/public/assets/icon/cart.svg';
import navMenu from '~/public/assets/icon/nav-menu.svg';
import searchGrey from '~/public/assets/icon/search-grey.svg';
import search from '~/public/assets/icon/search.svg';
import logo from '~/public/assets/img/logo.svg';
import SideMenu from './SideMenu';

import classNames from './styles';
const NavBar = () => {
  const { asPath, locale } = useRouter();

  const [searchVisible, setSearchVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const [searchText, setSearchText] = useState('');

  const toggleSearch = () => {
    setSearchVisible((p) => !p);
  };

  const toggleMenu = () => {
    setMenuVisible((p) => !p);
  };

  useEffect(() => {
    // close the side menu when the url change
    menuVisible && toggleMenu();
    // close the search bar when the url change
    searchVisible && toggleSearch();
  }, [asPath]);

  return (
    <div className={classNames.navBarContainer}>
      <div className={classNames.navBarIconsContainer}>
        {/*left logo */}
        <Link href={routes.mainPage}>
          <div className=" cursor-pointer ">
            <Image src={logo} alt="Logo" />
          </div>
        </Link>
        {/* right icons */}
        <div className=" flex items-center">
          {/* search icon */}
          <div className="mx-2 cursor-pointer" onClick={toggleSearch}>
            <Image
              src={!searchVisible ? search : searchGrey}
              alt="nav button"
            />
          </div>
          {/* shoping cart */}
          <div className=" mx-2 cursor-pointer">
            <Image src={cart} alt="shopping cart" />
          </div>
          {/* hamburger menu */}
          <div className=" ml-2 mr-1 cursor-pointer" onClick={toggleMenu}>
            <Image src={navMenu} alt="nav button" />
          </div>
        </div>
      </div>
      {/* search bar */}
      <SearchBar
        border
        placeholder={text[locale]?.searchBar || ''}
        visible={searchVisible}
        defaultValue={searchText}
        margin
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      {/* side menu */}
      <SideMenu menuVisible={menuVisible} close={toggleMenu} />
    </div>
  );
};

export default NavBar;
