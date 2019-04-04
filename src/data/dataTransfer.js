export function jsonParse(str) {
  let parsed = {};
  try {
    parsed = JSON.parse(str)
  }
  catch (e) {
    console.log(e);
    return false;
  }
  return parsed;
};

export function jsonStringify(obj) {
  let str = "";
  try {
    str = JSON.stringify(obj);
  }
  catch (e) {
    console.log(e);
    return false;
  }
  return str;
}
