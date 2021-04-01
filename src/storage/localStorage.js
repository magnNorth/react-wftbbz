export const getLocalData = type => {
  //localstorage
  this.storage = { name: "fbcomp" + type };
  this.storage.fbUserData = localStorage.getItem(this.storage.name);
  if (!this.storage.fbUserData) {
    console.log("building local storage");
    let initData = { type: type };
    localStorage.setItem(this.storage.name, JSON.stringify(initData));
    localStorage.getItem(this.storage.name);
    console.log(this.storage.fbUserData);
    this.storage.fbUserData = localStorage.getItem(this.storage.name);
  }
  console.log("data stored");
  return this.storage;
};

export const setLocalData = data => {
  //localstorage
  localStorage.setItem(this.storage.name, JSON.stringify(data));
  localStorage.getItem(this.storage.name);
  this.storage.fbUserData = localStorage.getItem(this.storage.name);

  console.log("data stored");
  return this.storage;
};
