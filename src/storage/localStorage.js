export const initLocalData = initOptions => {
  this.storage = {
    name: "fbcomp-" + initOptions.type,
    store: [
      {
        type: initOptions.type,
        request: [initOptions],
        userPref: []
      }
    ]
  };

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
