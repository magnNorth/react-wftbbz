let hashCode = function(s) {
  return s.split("").reduce(function(a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};

export const initLocalData = (initOptions, id) => {
  this.storage = {
    name:
      "fbcomp-" + initOptions.type + "-" + id + hashCode(window.location.href)
  };
console.log(getLocalData())
  if (!getLocalData()) {
    setLocalData(this.storage);
  }
  return getLocalData();
};

export const setLocalData = data => {
  localStorage.setItem(this.storage.name, JSON.stringify(data));
  return getLocalData();
};

export const clearLocalData = () => {
  localStorage.clear();
  return getLocalData();
};

export const getLocalData = () => {
  return JSON.parse(localStorage.getItem(this.storage.name));
};
