import { PatternFormat } from 'react-number-format';

import classNames from './styles';

const InputNumber = ({
  className,
  label,
  placeholder,
  defaultValue,
  onChange,
  format,
  displayEmptyFormat,
  extraButton,
  extraClick,
  error,
  mask,
  onBlur,
}) => {
  return (
    <div className={className}>
      {label && <div className={classNames.inputLabel}>{label}</div>}
      <div className=" relative ">
        <PatternFormat
          onBlur={onBlur}
          placeholder={placeholder}
          displayType="input"
          className={
            classNames.inputField +
            (error ? ' border-red-300 ' : ' border-white ')
          }
          defaultValue={defaultValue}
          onValueChange={({ value }) => {
            onChange(value);
          }}
          format={format}
          allowEmptyFormatting={displayEmptyFormat}
          mask={mask}
        />
        {extraButton && (
          <div
            onClick={() => {
              if (typeof extraClick === 'function') {
                extraClick();
              }
            }}
            className={classNames.extraButton}
          >
            {extraButton}
          </div>
        )}
      </div>

      {error && <div className={classNames.inputError}>{error}</div>}
    </div>
  );
};

export default InputNumber;
