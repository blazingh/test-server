//checks if the object is empty retunr true / false
export const isEmpty = (obj) => {
  [Object, Array].includes((obj || {}).constructor) &&
    !Object.entries(obj || {}).length;
};

//convert object. to array can exclude specific object from the retuned array
export const toArray = (obj, excludeArray = []) => {
  const array = [];
  Object.entries(obj).map(
    (item) => !excludeArray.includes(item[0]) && array.push(item[1])
  );
  return array;
};

//remove specidied item from array and retunrn the new array, or retunr the old array if item not found
export const removeFromArray = (arrayy, item) => {
  const newArray = arrayy;
  const index = newArray.indexOf(item);
  if (index > -1) {
    newArray.splice(index, 1);
  }
  return newArray;
};

//if item found it is removed from the array, if it is not found it will be added, adn retunr the new array at the end
export const toggleItemInArray = (arrayy, item) => {
  let newArray = arrayy;
  newArray.includes(item)
    ? (newArray = removeFromArray(newArray, item))
    : newArray.push(item);
  return newArray;
};

export const HelperArray = {
  ObjectIsEmpty: isEmpty,
  ObjectToArray: toArray,
  removeFromArray,
  toggleItemInArray,
};
