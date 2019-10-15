import React, { useEffect } from "react";
import PropTypes from "prop-types";
import EditorContainer from "./EditorContainer";
import CustomMap from "./../components/CustomMap";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

const MapLayout = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;

const MapContainer = inject("locationStore")(
  observer(props => {
    useEffect(() => {
      props.locationStore.getAllLocations();
    }, [props.locationStore, props.locationStore.isLoading]);
 
    return (
      <MapLayout>
        <CustomMap />
        <EditorContainer />
      </MapLayout>
    );
  })
);

MapContainer.propTypes = {
  locationStore: PropTypes.object
};

export default MapContainer;
