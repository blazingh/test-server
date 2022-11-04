import Image from 'next/image';
import searchGrey from '~/public/assets/icon/search-grey.svg';
import classNames from './styles';

const SearchBar = ({
  visible,
  placeholder,
  border,
  className,
  onChange,
  defaultValue,
  margin,
  searchLeft,
}) => {
  return (
    <div
      className={
        classNames.searchBarContainer +
        (!visible ? ' h-0 ' : margin ? ` h-11 mb-2 ` : ' h-10 ') +
        className
      }
    >
      <div className="relative">
        {border && <div className={classNames.searchBarBottomBorder} />}
        <div
          className={
            classNames.searchBarInputContainer +
            (searchLeft ? ' flex-row-reverse ' : ' ')
          }
        >
          <input
            className="w-full h-full outline-none mx-1 md:mx-2"
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={(e) => {
              onChange(e);
            }}
          />
          <div className=" mx-1 md:mx-2 ">
            <Image
              src={searchGrey}
              alt="search"
              width={15}
              height={15}
              className=" cursor-pointer "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
