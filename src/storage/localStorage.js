let defaultObject = {
  type: null,
  request: [
    {
      collection: null,
      sort: null,
      query: null,
      profile: null
    }
  ],
  userPref: [
    {
      clear: null
    }
  ]
};

export const initLocalData = type => {
  this.storage = { name: "fbcomp-" + type };
  getLocalData();
  if (!this.storage.storageObject) {
    setLocalData(defaultObject);
  }

  return getLocalData();
};

export const setLocalData = data => {
  localStorage.setItem(this.storage.name, JSON.stringify(data));
  return getLocalData();
};

export const clearLocalData = () => {
  setLocalData(defaultObject);
  return getLocalData();
};

export const getLocalData = () => {
  this.storage.storageObject = JSON.parse(
    localStorage.getItem(this.storage.name)
  );
  return this.storage;
};
