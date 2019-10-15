import React, { Component } from "react";
import EditorContainer from "./EditorContainer";
import CustomMap from "./../components/CustomMap";
import styled from "styled-components";
import { inject, observer } from 'mobx-react';
import {
  getLocationList,
  getOneLocation,
  addOneLocation,
  deleteOneLocation,
  updateOneLocation
} from "./../utils/helper";

const MapLayout = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;


@inject('locationStore')
@observer
class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    getLocationList().then((data) => {
      this.setState({ locations: data });
    });

    // getOneLocation('berlin').then((data) => {
    //     console.log(data);
    //   });

    // addOneLocation('berlin').then((data) => {
    //   console.log(data);
    // });

    // updateOneLocation("munich", 'berlin').then((data) => {
    //   console.log(data);
    // });

    // deleteOneLocation("munich").then((data) => {
    //   console.log(data);
    // });
  }
  render() {
    return (
      <MapLayout>
        <CustomMap locations={this.state.locations} />
        <EditorContainer />
      </MapLayout>
    );
  }
}

export default MapContainer;
