const classNames = {
  clinicCardContainer:
    ' border border-gray-100 my-2 w-full p-2 rounded-md bg-white relative ',

  clinicCardImageCont: ' relative aspect-square w-28 md:w-32 mr-2 ',

  clinicCardImage: ' aspect-square w-full rounded overflow-hidden',

  clinicCardLogo:
    ' absolute z-10 h-7 md:h-8 bg-white rounded-br overflow-hidden aspect-square ',

  clinicCardDetails:
    ' relative text-sm md:text-base flex flex-col justify-around font-semibold dis-text-dark w-full pr-5 ',

  clinicCardFavorite:
    ' w-5 h-5 text-gray-500 absolute z-10 right-2 top-2 hover:cursor-pointer ',

  clinicCardPrice:
    ' text-sm md:text-base font-semibold absolute right-0 bottom-0 ',

  clinicCardLocation:
    ' text-xs md:text-sm text-blue underline whitespace-nowrap cursor-pointer ',

  clinicCardMoreDetails:
    ' text-blue font-semibold text-xs md:text-sm w-full h-7 mt-2 flex justify-between items-center ',

  clinicCardSelectButton:
    ' w-full h-full rounded-b bg-middle text-offwhite font-semibold cursor-pointer select-none ',
};

export default classNames;
