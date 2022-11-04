import Chevron from '~/components/icons/Chevron';
import classNames from './styles';

const InputButton = ({
  label,
  buttonText,
  onClick,
  extraLink,
  returnValue,
  loading,
  center,
  rounded,
  sizeIndex = 1,
  buttonColorIndex = 4,
  icon,
  bottomBreak,
  extraLinkClick,
}) => {
  const colors = [
    ' bg-blue text-white border-blue ',
    ' bg-white dis-text-dark border-2 border-gray-400 ',
    ' bg-purple text-white  ',
    ' bg-middle text-white ',
    ' dis-bg-gradient text-white ',
    ' bg-gray-100 dis-text-dark ',
    ' bg-white bg-opacity-30 text-white ',
    ' bg-white bg-opacity-30 text-red-500 ',
    ' bg-transparent dis-text-dark ',
  ];

  const buttonSizes = [' h-14 ', ' h-11 ', ' h-9 '];

  const chevronSizes = [' h-8 w-8 ', ' h-6 w-6 ', ' h-4 w-4 '];

  const handleClick = () => {
    if (!loading && typeof onClick == 'function') {
      onClick(returnValue);
    }
  };

  return (
    <div
      className={
        classNames.buttonContainer +
        colors[buttonColorIndex - 1] +
        buttonSizes[sizeIndex - 1] +
        (rounded ? 'rounded-md ' : ' rounded-none ') +
        (bottomBreak ? ' border-b ' : '') +
        (buttonText ? '' : ' cursor-pointer ')
      }
      onClick={() => {
        !buttonText && handleClick();
      }}
    >
      <div className={center ? ' w-full text-center ' : ' flex items-center'}>
        {icon}{' '}
        <span className=" ml-2 ">{!loading ? label : '...loading...'}</span>
      </div>
      {!center && (
        <>
          {buttonText ? (
            <div className=" flex items-center ">
              {extraLink && (
                <label
                  className={classNames.buttonExtraLink}
                  onClick={extraLinkClick}
                >
                  {extraLink}
                </label>
              )}
              <button
                type="button"
                onClick={() => {
                  handleClick();
                }}
                className={classNames.buttonButton}
              >
                {buttonText}
              </button>
            </div>
          ) : (
            <Chevron
              className={classNames.buttonChevron + chevronSizes[sizeIndex - 1]}
            />
          )}
        </>
      )}
    </div>
  );
};

export default InputButton;
