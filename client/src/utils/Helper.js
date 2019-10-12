import axios from "axios";
const LOCATION_GET = "http://localhost:3000/location/";
const LOCATION_ADD = "http://localhost:3000/location/add";
const LOCATION_UPDATE = "http://localhost:3000/location/update/";
const LOCATION_DELETE = "http://localhost:3000/location/delete/";

export async function getLocationList() {
  const ALL_URL = "all";
  let data_Url = LOCATION_GET + ALL_URL;
  let response = await axios.get(data_Url);
  if (response.status === 200) {
    return response.data;
  }
}

export async function getOneLocation(address) {
  let data_Url = LOCATION_GET + address;
  let response = await axios.get(data_Url);
  if (response.status === 200) {
    return response.data;
  }
}

export async function addOneLocation(address) {
  let data_Url = LOCATION_ADD;
  let data = {
    address: address
  };
  let response = await axios
    .post(data_Url, data)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      let { status, data } = error.response;
      let errorInfo = { status, data };
      return errorInfo;
    });
  return response;
}

export async function updateOneLocation(oldAddress, newAddress) {
  let data_Url = LOCATION_UPDATE + oldAddress;
  let data = {
    address: newAddress
  };

  let response = await axios
    .post(data_Url, data)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      let { status, data } = error.response;
      let errorInfo = { status, data };
      return errorInfo;
    });
  return response;
}

export async function deleteOneLocation(address) {
  let data_Url = LOCATION_DELETE + address;

  let response = await axios
    .delete(data_Url)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      let { status, data } = error.response;
      let errorInfo = { status, data };
      return errorInfo;
    });
  return response;
}
