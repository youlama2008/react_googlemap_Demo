import { observable, action } from "mobx";
import {
  getLocationList,
  getOneLocation,
  addOneLocation,
  deleteOneLocation,
  updateOneLocation
} from "./../utils/helper";

class Location {
  @observable address;
  @observable geolocation;

  constructor(data) {
    this.address = data.address || "";
    this.geolocation = data.geolocation || [];
  }
}

class LocationtStore {
  @observable locationList = [];

  @action
  addLocation(address) {
    addOneLocation(address).then((data) => {
      this.locationList.push(data);
    });
  }

  @action
  deleteLocation(address) {
    deleteOneLocation(address).then((data) => {
      console.log(data);
      let index = this.locationList.findIndex((a) => a.address === address);
      this.locationList.splice(index, 1);
    });
  }

  @action
  getAllLocations() {
    getLocationList().then((data) => {
      this.locationList = data.map((item) => {
        return new Location(item);
      });
    });
  }

  @action
  getLocation(address) {
    getOneLocation(address).then((data) => {
      console.log(data);
      this.locatinoInView = new Location(data);
    });
  }

  @action
  updateLocation(currentAddress, newAddress) {
    updateOneLocation(currentAddress, newAddress).then((data) => {
      let index = this.locationList.findIndex(
        (a) => a.address === currentAddress
      );
      this.locationList[index] = data;
    });
  }
}

export default new LocationtStore();
