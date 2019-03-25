// CHeck if two objects are deeply equal

// simple solution
const areEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

// unhandled edge cases:
// objA value === undefiend, objB key doesnt exist
// objA value && objB value === NaN (doesnt equal itself)

const areEqual = (objA, objB) => {
  const AKeys = Object.keys(objA)
  const BKeys = Object.keys(objB);
  if (AKeys.length !== BKeys.length) return false;

  AKeys.forEach((AKey) => {
    const AVal = objA[AKey];
    const BVal = objB[AKey];

    if (typeof AVal !== object) {
      if (AVal !== BVal) return false;
    } else if (Array.isArray(AVal)) {
      for (let i = 0; i < AVal.length; i += 1) {
        if (!areEqual(AVal[i], BVal[i])) return false;;
      }
    } else {
      if (!areEqual(AVal, BVal)) return false;
    }
  });
  return true;
}