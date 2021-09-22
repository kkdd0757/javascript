function isEqual(obj1, obj2) {
  if (arguments.length === 0) {
    throw new Error(
      `isEqual requires at least 2 argument, but only 0 were passed`
    );
  } else if (arguments.length === 1) {
    throw new Error(
      `isEqual requires at least 2 argument, but only 1 were passed`
    );
  }
  const isPrimitive = obj => obj !== Object(obj);
  const isObject = obj => obj.constructor === Object;

  // 타입체크
  if (typeof obj1 !== typeof obj2) return false;
  // 원시값
  if (isPrimitive(obj1) && isPrimitive(obj2)) return Object.is(obj1, obj2);

  // 함수
  if (typeof obj1 === 'function' && typeof obj2 === 'function')
    return obj1 === obj2;

  // 객체일 경우 세분화
  if (
    typeof obj1 === 'object' &&
    obj1 !== null &&
    typeof obj2 === 'object' &&
    obj2 !== null
  ) {
    // []와 {}가 아닐때
    if (
      !isObject(obj1) &&
      !isObject(obj2) &&
      !Array.isArray(obj1) &&
      !Array.isArray(obj2)
    ) {
      if (obj1 !== obj2) return false;
    }
    // [] 또는 {}일때
    if (
      (Array.isArray(obj1) && !Array.isArray(obj2)) ||
      (!Array.isArray(obj1) && Array.isArray(obj2))
    )
      return false;
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for (const key in obj1) {
      if (!(key in obj2)) return false;
    }
    for (const key in obj1) {
      if (!isEqual(obj1[key], obj2[key])) return false;
    }
  }
  return true;
}
export default isEqual;
