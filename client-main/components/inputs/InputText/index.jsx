const InputText = ({
  className,
  label,
  maxLenght,
  placeholder,
  defaultValue,
  onChange,
  error,
  password,
  onBlur,
}) => {
  return (
    <div className={className}>
      {label && (
        <div className="m-1 dis-text-dark dis-text-lg font-semibold">
          {label}
        </div>
      )}
      <input
        onBlur={onBlur}
        type={password ? 'password' : 'text'}
        maxLength={maxLenght}
        placeholder={placeholder}
        className={
          'w-full border py-3 p-2 dis-text-dark outline-none rounded-md dis-text-md placeholder:dis-text-grey' +
          (error ? ' border-red-300 ' : ' border-white ')
        }
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div className=" m-1 text-red-400 dis-text-md ">{error}</div>}
    </div>
  );
};

export default InputText;
