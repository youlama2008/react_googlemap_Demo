import axios from 'axios';
const BaseURL = 'http://localhost:3000/';
const ALL_LOCATIONS_URL = "location/all";

export async function getLocationList() {
  let data_Url = BaseURL + ALL_LOCATIONS_URL;
	let response = await axios.get(data_Url);
  if (response.status === 200) {
  	return response.data;
  }
}
