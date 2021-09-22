//깊은 복사
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  const output = Array.isArray(obj) ? [] : {};
  for (const key of Object.keys(obj)) {
    output[key] = deepClone(obj[key]);
  }
  return output;
}

export default deepClone;
