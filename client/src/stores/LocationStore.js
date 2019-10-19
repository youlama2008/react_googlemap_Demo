import { observable, action, decorate, computed } from "mobx";

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
  valid;

  constructor(data) {
    this.address = data.address || "";
    this.latitude = data.latitude || "";
    this.langtitude = data.langtitude || "";
    this.valid = data.valid || false;
  }
}

decorate(Location, {
  address: observable,
  latitude: observable,
  langtitude: observable,
  valid: observable
});

class LocationtStore {
  locationList = [];
  isLoading = false;
  errorMsg = "";

  get hasInitLocation() {
    let index = this.locationList
      ? this.locationList.findIndex(location => location.address === "")
      : -1;
    return index > -1;
  }

  initLocation() {
    let location = new Location({});
    if (this.locationList) {
      this.locationList.unshift(location);
    } else {
      this.locationList = [location];
    }
    this.errorMsg = "";
  }

  addLocation(address) {
    if (address) {
      addOneLocation(address)
        .then(data => {
          if (!data.status) {
            let locationData = Object.assign(data, { valid: true });
            this.locationList[0] = formatData(locationData);
          } else {
            this.locationList[0].valid = false;
            this.errorMsg = data.data;
          }
        })
        .catch(error => {
          this.errorMsg = error;
        });
    } else {
      this.errorMsg = "Please enter your address";
    }
  }

  deleteLocation(address) {
    if (address) {
      let index = this.locationList.findIndex(
        location => location.address === address
      );
      if (index > -1) {
        deleteOneLocation(address)
          .then(data => {
            if (!data.status) {
              this.errorMsg = "";
              this.locationList.splice(index, 1);
            } else {
              this.locationList[index].valid = false;
              this.errorMsg = data.data;
            }
          })
          .catch(error => {
            this.errorMsg = error;
          });
      }
    } else {
      this.locationList.shift();
    }
  }

  getAllLocations() {
    getLocationList().then(data => {
      this.errorMsg = "";
      this.locationList =
        data.length > 0 &&
        data.map(item => {
          let locationData = Object.assign(item, { valid: true });
          return new Location(formatData(locationData));
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
          // this.isLoading = false;
          let locationData = Object.assign(data, { valid: true });
          return new Location(formatData(locationData));
        })
        .catch(error => {
          this.errorMsg = error;
          // this.isLoading = false;
        });
    }
  }

  updateLocation(currentAddress, newAddress) {
    updateOneLocation(currentAddress, newAddress)
      .then(data => {
        console.log(data);
        let index = this.locationList.findIndex(
          a => a.address === currentAddress
        );
        if (!data.status) {
          this.errorMsg = "";
          this.locationList[index] = new Location(formatData(data));
          // this.isLoading = false;
        } else {
          this.locationList[index].valid = false;
          this.errorMsg = data.data;
          // this.isLoading = false;
        }
      })
      .catch(error => {
        this.errorMsg = error;
        // this.isLoading = false;
      });
  }
}

decorate(LocationtStore, {
  locationList: observable,
  isLoading: observable,
  errorMsg: observable,
  hasInitLocation: computed,
  addLocation: action,
  deleteLocation: action,
  getAllLocations: action,
  getLocation: action,
  updateLocation: action,
  initLocation: action
});

export default new LocationtStore();
