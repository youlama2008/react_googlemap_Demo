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
  initLocationCount = 0;
  errorMsg = "";

  initLocation() {
    let location = new Location({});
    if (this.locationList) {
      this.locationList.unshift(location);
    } else {
      this.locationList=[location];
    }
    this.initLocationCount++;
  }

  addLocation(address) {
    if (address) {
      addOneLocation(address)
        .then(data => {
          if (!data.status) {
            this.locationList.push(formatData(data));
            this.isLoading = false;
            this.errorMsg = "";
          } else {
            this.errorMsg = data.data;
            this.isLoading = false;
          }
        })
        .catch(error => {
          this.errorMsg = error;
          this.isLoading = false;
        });
    } else {
      this.errorMsg = "Please enter your address";
      this.isLoading = false;
    }
  }

  deleteLocation(address) {
    let index = this.locationList.findIndex(a => a.address === address);
    if (index > -1) {
      deleteOneLocation(address)
        .then(data => {
          this.errorMsg = "";
          console.log(data);
          this.locationList.splice(index, 1);
          this.isLoading = false;
        })
        .catch(error => {
          this.errorMsg = error;
          this.isLoading = false;
        });
    }
  }

  getAllLocations() {
    getLocationList().then(data => {
      this.isLoading = false;
      this.errorMsg = "";
      this.locationList =
        data.length > 0 &&
        data.map(item => {
          return new Location(formatData(item));
        });
    });
  }

  // this is not used in the project yet
  getLocation(address) {
    if (address) {
      getOneLocation(address)
        .then(data => {
          this.errorMsg = "";
          console.log(data);
          this.isLoading = false;
          return new Location(formatData(data));
        })
        .catch(error => {
          this.errorMsg = error;
          this.isLoading = false;
        });
    }
  }

  updateLocation(currentAddress, newAddress) {
    updateOneLocation(currentAddress, newAddress)
      .then(data => {
        console.log(data);
        if (!data.status) {
          this.errorMsg = "";
          let index = this.locationList.findIndex(
            a => a.address === currentAddress
          );
          this.locationList[index] = new Location(formatData(data));
          this.isLoading = false;
        } else {
          this.errorMsg = data.data;
          this.isLoading = false;
        }
      })
      .catch(error => {
        this.errorMsg = error;
        this.isLoading = false;
      });
  }
}

decorate(LocationtStore, {
  locationList: observable,
  isLoading: observable,
  initLocationCount: observable,
  errorMsg: observable,
  addLocation: action,
  deleteLocation: action,
  getAllLocations: action,
  getLocation: action,
  updateLocation: action,
  initLocation: action
});

export default new LocationtStore();
