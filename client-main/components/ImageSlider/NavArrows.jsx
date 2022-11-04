import Chevron from '~/components/icons/Chevron';
import classNames from './styles';

//navigation arrows for the images slider

const NavArrows = ({ setSlide, getSlide }) => {
  return (
    <div className={classNames.navArrowsContainer}>
      <Chevron
        onClick={() => {
          setSlide(getSlide() - 1);
        }}
        className={classNames.navArrowsChevron + ' rotate-180'}
      />
      <Chevron
        className={classNames.navArrowsChevron}
        onClick={() => {
          setSlide(getSlide() + 1);
        }}
      />
    </div>
  );
};

export default NavArrows;
