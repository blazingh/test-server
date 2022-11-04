const classNames = {
  stepProgressBarContainer:
    ' w-full flex items-center justify-start overflow-hidden relative h-9 ',

  stepProgressBarStep:
    ' flex items-center flex-shrink-0 transition-all ease-in-out duration-500 ',

  stepProgressBarNum:
    ' mr-1 text-md md:text-lg text-offwhite font-semibold flex items-center justify-center rounded-full bg-gray-300 w-8 h-8  flex-shrink-0 select-none',

  stepProgressBarNumSelected:
    ' mr-1 text-lg md:text-xl text-offwhite font-bold flex items-center justify-center rounded-full dis-bg-gradient h-9 w-9  flex-shrink-0 select-none',

  stepProgressBarName:
    ' text-md md:text-lg  font-semibold text-gray-300 mr-3  whitespace-nowrap ',

  stepProgressBarNameSelected:
    ' text-md md:text-lg mr-3 font-bold text-transparent bg-clip-text dis-bg-gradient whitespace-nowrap',

  stepProgressBarChevron:
    ' ml-1 flex-shrink-0 rotate-180 text-blue stroke-blue stroke-1 cursor-pointer ',

  stepProgressBarFade:
    ' opacity-75 w-full h-full top-0 right-0 bg-gradient-to-l from-offwhite via-transparent to-transparent bg absolute z-20 pointer-events-none',
};

export default classNames;
