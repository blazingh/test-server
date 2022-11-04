const PopUp = ({ visible, onReturn, children }) => {
  return (
    visible && (
      <>
        <div
          className=" w-screen h-screen top-0 left-0 z-50 bg-opacity-50 fixed bg-gray-900"
          onClick={onReturn}
        ></div>
        <div className=" w-full px-5 max-w-xl z-50 absolute top-30 left-1/2 -translate-x-1/2 ">
          <div className=" w-full bg-white rounded p-2">{children}</div>
        </div>
      </>
    )
  );
};

export default PopUp;
