import React, { Component } from "react";
import EditorContainer from "./EditorContainer";
import CustomMap from "./../components/CustomMap";
import styled from "styled-components";
import {
  getLocationList,
  // getOneLocation,
  // addOneLocation,
  // deleteOneLocation,
  // updateOneLocation
} from "./../utils/helper";

const MapLayout = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;

class MapContainer extends Component {
  componentDidMount() {
    getLocationList().then((data) => {
      console.log(data);
    });

    // getOneLocation('berlin').then((data) => {
    //     console.log(data);
    //   });

    // addOneLocation('berlin').then((data) => {
    //   console.log(data);
    // });

    // updateOneLocation('berlin', "munich").then((data) => {
    //   console.log(data);
    // });

    // deleteOneLocation("munich").then((data) => {
    //   console.log(data);
    // });
  }
  render() {
    return (
      <MapLayout>
        <CustomMap />
        <EditorContainer />
      </MapLayout>
    );
  }
}

export default MapContainer;
