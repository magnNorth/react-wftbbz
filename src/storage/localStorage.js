export const initLocalData = type => {
  //localstorage
  //clearLocalData();
  this.storage = { name: "fbcomp-" + type };
  this.storage.fbUserData = localStorage.getItem(this.storage.name);
  if (!this.storage.fbUserData) {
    console.log("building local storage");
    //setLocalValue("type", type);
  }
  console.log("preset data");
  return getLocalData();
};

export const setLocalValue = (name, data) => {
  //getLocalData();
  let jdata = JSON.parse(getLocalData());
  console.log("setLoac", name, data, jdata);
  jdata[name] = data;
  console.log("setLoac", jdata);
  setLocalData(JSON.stringify(jdata));
  console.log("setLoac");
  return getLocalData();
};

export const setLocalData = data => {
  //localstorage
  localStorage.setItem(this.storage.name, JSON.stringify(data));
  console.log("stored");
  return getLocalData();
};

export const clearLocalData = () => {
  localStorage.setItem(this.storage.name, "");
  console.log("cleared", this.storage);
  return getLocalData();
};

export const getLocalData = () => {
  this.storage.fbUserData = localStorage.getItem(this.storage.name);
  console.log("get", this.storage);
  return this.storage;
};
