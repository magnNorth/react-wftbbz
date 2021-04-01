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

  this.storage.storageObject = localStorage.getItem(this.storage.name);
  if (!this.storage.fbUserData) {
    //console.log("building local storage");
    localStorage.setItem(
      this.storage.name,
      JSON.stringify(this.storage.fbUserData)
    );
    //setLocalValue("type", type);
  }
  //console.log("preset data");
  return getLocalData();
};

export const setLocalData = data => {
  //localstorage
  localStorage.setItem(this.storage.name, JSON.stringify(data));
  //  console.log("stored");
  return getLocalData();
};

export const clearLocalData = () => {
  localStorage.setItem(this.storage.name, "");
  //  console.log("cleared", this.storage);
  return getLocalData();
};

export const getLocalData = () => {
  this.storage.fbUserData = localStorage.getItem(this.storage.name);
  return this.storage;
};
