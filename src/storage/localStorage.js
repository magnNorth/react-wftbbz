let hashCode = function(s) {
  return s.split("").reduce(function(a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};

export const initLocalData = (initOptions, id) => {
  let storage = {
    name:
      "fbcomp-" + initOptions.type + "-" + id + hashCode(window.location.href)
  };

  if (!getLocalData(storage.name)) {
    setLocalData(storage.name, storage);
  }
  return getLocalData(storage.name);
};

export const setLocalData = (name, data) => {
  console.log("set", name, data);
  localStorage.setItem(name, JSON.stringify(data));
  return getLocalData(name);
};

export const clearLocalData = () => {
  localStorage.clear();
  return getLocalData(name);
};

export const getLocalData = name => {
  console.log("get", name);
  return JSON.parse(localStorage.getItem(name));
};
