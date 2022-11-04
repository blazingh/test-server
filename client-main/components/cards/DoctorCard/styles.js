const classNames = {
  DoctorCardContainer: ' mt-2 rounded-md p-2 bg-white w-full relative ',

  DoctorCardImage:
    ' h-24 bg-offwhite aspect-square mr-2 border rounded overflow-hidden border-offwhite ',

  DoctorCardDetailes: ' flex flex-col justify-between pb-2 ',

  DoctorCardName: ' font-semibold dis-text-dark text-sm md:text-base flex ',

  DoctorCardBranch: ' text-gray-500 text-xs md:text-sm flex font-light mt-1 ',

  DoctorCardAppointment:
    ' whitespace-nowrap flex text-sm md:text-base mt-2 items-baseline ',

  DoctorCardFavorite:
    ' w-5 h-5 text-gray-500 absolute z-10 right-2 top-2 hover:cursor-pointer ',

  DoctorCardSelectButton:
    ' w-full h-full rounded-b bg-middle text-offwhite font-semibold cursor-pointer select-none ',
};

export default classNames;
