import { observable, action, decorate } from "mobx";

import {
  getLocationList,
  getOneLocation,
  addOneLocation,
  deleteOneLocation,
  updateOneLocation,
  formatData
} from "./../utils/Helper";

class Location {
  address;
  latitude;
  langtitude;

  constructor(data) {
    this.address = data.address || "";
    this.latitude = data.latitude || "";
    this.langtitude = data.langtitude || "";
  }
}

decorate(Location, {
  address: observable,
  latitude: observable,
  langtitude: observable
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
        return new Location(formatData(item));
      });
      this.isLoading = false;
    });
  }

  getLocation(address) {
    getOneLocation(address).then(data => {
      return new Location(formatData(data));
    });
  }

  updateLocation(currentAddress, newAddress) {
    updateOneLocation(currentAddress, newAddress).then(data => {
      let index = this.locationList.findIndex(
        a => a.address === currentAddress
      );
      this.locationList[index] = formatData(data);
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
