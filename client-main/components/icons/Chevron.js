const Chevron = ({ height = 32, width = 32, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
    </svg>
  );
};

export default Chevron;
