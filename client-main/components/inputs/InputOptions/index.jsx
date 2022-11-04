import { toggleItemInArray } from '~/functions/objectHelper';

const InputOptions = ({
  label = 'options',
  center,
  options,
  onChange,
  multiSelection,
  selectedValues = [],
}) => {
  const hangleChange = (value) => {
    let newSelection = multiSelection ? selectedValues : null;
    if (multiSelection) {
      newSelection = toggleItemInArray(newSelection, value);
    } else {
      newSelection = newSelection === value ? null : value;
    }
    if (typeof onChange == 'function') {
      onChange(newSelection);
    }
  };

  return (
    <div className=" w-full ">
      <div
        className={' w-full mx-2 ' + (center ? ' text-center ' : ' text-left ')}
      >
        {label}
      </div>
      <div
        className={
          ' flex w-full items-center mt-2 ' +
          (center ? ' justify-center ' : ' justify-start ')
        }
      >
        {options &&
          options.map((option, index) => (
            <div
              key={index}
              onClick={() => hangleChange(option.value)}
              className={
                ' border-2 mx-2 p-2 rounded-md cursor-pointer font-semibold ' +
                (selectedValues.includes(option.value)
                  ? ' border-blue dis-text-dark '
                  : ' border-gray-400 text-gray-400 ')
              }
            >
              {option.label}
            </div>
          ))}
      </div>
    </div>
  );
};

export default InputOptions;
