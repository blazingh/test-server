const TimeButton = ({ date, onClick }) => {
  return (
    <div className=" p-1 w-1/2 sm:w-1/3 ">
      <div
        className={
          'border h-10 flex items-center justify-center rounded' +
          (date[1]
            ? ' bg-green-300 dis-text-dark cursor-pointer'
            : ' bg-gray-300 text-gray-400')
        }
        onClick={() => {
          date[1] && onClick(date[0]);
        }}
      >
        {date[0].split(' ')[1].split(':')[0]}:
        {date[0].split(' ')[1].split(':')[1]}
      </div>
    </div>
  );
};

export default TimeButton;
