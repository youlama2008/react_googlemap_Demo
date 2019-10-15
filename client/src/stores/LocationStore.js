import { observable, action, decorate } from "mobx";

import {
  getLocationList,
  getOneLocation,
  addOneLocation,
  deleteOneLocation,
  updateOneLocation
} from "./../utils/Helper";

class Location {
  address;
  geolocation;

  constructor(data) {
    this.address = data.address || "";
    this.geolocation = data.geolocation || [];
  }
}

decorate(Location, {
  address: observable,
  geolocation: observable
});

class LocationtStore {
  locationList = [];
  isLoading = true;

  addLocation(address) {
    addOneLocation(address).then(data => {
      this.locationList.push(data);
      this.isLoading = false;
    });
  }

  deleteLocation(address) {
    deleteOneLocation(address).then(data => {
      console.log(data);
      let index = this.locationList.findIndex(a => a.address === address);
      this.locationList.splice(index, 1);
      this.isLoading = false;
    });
  }

  getAllLocations() {
    getLocationList().then(data => {
      this.locationList = data.map(item => {
        return new Location(item);
      });
      this.isLoading = false;
    });
  }

  getLocation(address) {
    getOneLocation(address).then(data => {
      console.log(data);
      this.locatinoInView = new Location(data);
      this.isLoading = false;
    });
  }

  updateLocation(currentAddress, newAddress) {
    updateOneLocation(currentAddress, newAddress).then(data => {
      let index = this.locationList.findIndex(
        a => a.address === currentAddress
      );
      this.locationList[index] = data;
      this.isLoading = false;
    });
  }
}

decorate(LocationtStore, {
  locationList: observable,
  addLocation: action,
  deleteLocation: action,
  getAllLocations: action,
  getLocation: action,
  updateLocation: action
});

export default new LocationtStore();
