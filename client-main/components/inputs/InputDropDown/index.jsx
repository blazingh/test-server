import { useRef } from 'react';
import Chevron from '~/components/icons/Chevron';
import classNames from './styles';
//
//a button that trigger a drop down directly under
//parameters: active: bollean || default false , responsible for showing or hiding the drop down
//            text: string || the text that will be displayed
//            onClick: function || a function that triger when pressing the button
//            children: component || all the children will be visible in the dropdown when active
//            scrollOnClick : bolean || default false, if true the elemne twill scroll to view on Click
//            buttonColorIndex : number || 1->blue 2->white 3->purple 4->primary 5->gradient
//            sizeINdex: number || 1->normla 2->small
//            rounded: bolean || true->rouned corner, false->sharp corners
//
const InputDropDown = ({
  text,
  onClick,
  active,
  rounded,
  sizeIndex = 1,
  buttonColorIndex = 4,
  scrollOnClick = false,
  scrollDelay = 200,
  children,
}) => {
  const colors = [
    ' bg-blue text-white ',
    ' bg-white dis-text-dark',
    ' bg-purple text-white ',
    ' bg-middle text-white ',
    ' dis-bg-gradient text-white ',
  ];

  const buttonSizes = [' h-14 ', ' h-11 '];

  const chevronSizes = [' h-8 w-8 ', ' h-6 w-6 '];

  const buttonRef = useRef(null);

  const scrollToView = () =>
    scrollOnClick &&
    buttonRef?.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });

  return (
    <div className={classNames.dropDownListContainer} ref={buttonRef}>
      <div
        onClick={() => {
          onClick();
          setTimeout(scrollToView, scrollDelay);
        }}
        className={
          classNames.dropDownListButton +
          colors[buttonColorIndex - 1] +
          buttonSizes[sizeIndex - 1] +
          (rounded
            ? active
              ? ' rounded-t-md '
              : ' transition-rounded rounded-md delay-500 '
            : 'rounded-none')
        }
      >
        <div className={classNames.dropDownListText}>{text}</div>
        <Chevron
          className={
            classNames.dropDownListChevron +
            chevronSizes[sizeIndex - 1] +
            (active ? ' -rotate-90 ' : ' rotate-90 ')
          }
        />
      </div>
      <div
        className={
          classNames.dropDownListList +
          (active
            ? ' max-h-96 overflow-y-scroll shadow-inner '
            : ' max-h-0 overflow-hidden shadow-none ')
        }
      >
        {children}
      </div>
    </div>
  );
};

export default InputDropDown;
