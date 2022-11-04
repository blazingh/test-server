const CityList = ({ cityList, onCitySelect }) => {
  return (
    <div className=" h-96 ">
      {cityList &&
        cityList?.map((city, index) => (
          <div
            className=" cursor-pointer text-left px-3 py-2 mx-1 border-b text-base border-gray-300 "
            key={index}
            onClick={() => {
              onCitySelect(city.id);
            }}
          >
            {city.name} {city?.part} {city.part === null && 'all'}
          </div>
        ))}
    </div>
  );
};

export default CityList;
