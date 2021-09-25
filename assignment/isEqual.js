function isEqual(comparison1, comparison2) {
  if (arguments.length < 2) {
    throw new Error(
      `isEqual requires at least 2 argument, but only ${arguments.length} were passed`
    );
  }
  const isPrimitive = obj => obj !== Object(obj);
  const isObject = obj => obj.constructor === Object;

  if (typeof comparison1 !== typeof comparison2) return false;
  if (isPrimitive(comparison1) && isPrimitive(comparison2))
    return Object.is(comparison1, comparison2);

  if (typeof comparison1 === 'function' && typeof comparison2 === 'function')
    return comparison1 === comparison2;

  if (
    !isObject(comparison1) &&
    !isObject(comparison2) &&
    !Array.isArray(comparison1) &&
    !Array.isArray(comparison2)
  )
    return Object.is(comparison1, comparison2);

  if (
    (Array.isArray(comparison1) && !Array.isArray(comparison2)) ||
    (!Array.isArray(comparison1) && Array.isArray(comparison2))
  )
    return false;
  if (Object.keys(comparison1).length !== Object.keys(comparison2).length) return false;

  for (const key of Object.keys(comparison1)) {
    if (!Object.prototype.hasOwnProperty.call(comparison2, key)) return false;
  }
  for (const key of Object.keys(comparison1)) {
    if (!isEqual(comparison1[key], comparison2[key])) return false;
  }
  return true;
}
export default isEqual;
