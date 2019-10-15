import { observable, action, decorate } from "mobx";
import {
  getLocationList,
  getOneLocation,
  addOneLocation,
  deleteOneLocation,
  updateOneLocation
} from "./../utils/helper";

class Location {
  address;
  geolocation;

  constructor(data) {
    this.address = data.address || "";
    this.geolocation = data.geolocation || [];
  }
}
decorate(Timer, {
  address: observable,
  geolocation: observable
});

class LocationtStore {
  locationList = [];

  addLocation(address) {
    addOneLocation(address).then((data) => {
      this.locationList.push(data);
    });
  }

  deleteLocation(address) {
    deleteOneLocation(address).then((data) => {
      console.log(data);
      let index = this.locationList.findIndex((a) => a.address === address);
      this.locationList.splice(index, 1);
    });
  }

  getAllLocations() {
    getLocationList().then((data) => {
      this.locationList = data.map((item) => {
        return new Location(item);
      });
    });
  }

  getLocation(address) {
    getOneLocation(address).then((data) => {
      console.log(data);
      this.locatinoInView = new Product(data);
    });
  }

  updateLocation(currentAddress, newAddress) {
    updateOneLocation(currentAddress, newAddress).then((data) => {
      let index = this.locationList.findIndex((a) => a.address === address);
      this.locationList[index] = data;
    });
  }
}

decorate(LocationtStore, {
  locationList: observable,
  getAllLocations: action,
  getLocation: action,
  addLocation: action,
  deleteLocation: action,
  updateLocation: action,
});

export default new LocationtStore();
