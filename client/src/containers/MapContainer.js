import React, { useEffect } from "react";
import PropTypes from "prop-types";
import LocationContainer from "./LocationContainer";
import CustomMap from "./../components/CustomMap";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import CustomButton from "./../components/CustomButton";

const MapLayout = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  justify-content: flex-start;
`;
const InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const AddLocationButton = styled(CustomButton)`
  background-color: #198bbb;
  color: #fff;
  width: 80px;
  font-weight: bold;
  :disabled {
    background-color: #ccc;
  }
`;

const MapContainer = inject("locationStore")(
  observer(props => {
    useEffect(() => {
      props.locationStore.getAllLocations();
    }, [props.locationStore, props.locationStore.isLoading]);

    const addMapBtnClick = () => {
      props.locationStore.initLocation();
    };

    return (
      <MapLayout>
        <CustomMap />
        <InputLayout>
          <AddLocationButton
            disabled={props.locationStore.hasInitLocation}
            text="Add Map"
            handleBtnClick={addMapBtnClick}
          />
          <LocationContainer />
        </InputLayout>
      </MapLayout>
    );
  })
);

MapContainer.propTypes = {
  locationStore: PropTypes.object
};

export default MapContainer;
