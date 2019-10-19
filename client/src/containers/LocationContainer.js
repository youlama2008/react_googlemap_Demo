import React from "react";
import CustomEditor from "../components/CustomEditor";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

const LocationsLayout = styled.div`
  display: inline-block;
  border-top: 1px solid #cecece;
  margin-top: 10px;
  padding-top: 20px;
  min-width: 200px;
  text-align: left;
`;

const LocationContainer = inject("locationStore")(
  observer(props => {
    return (
      <LocationsLayout>
        {props.locationStore.locationList &&
          props.locationStore.locationList.map(location => {
            return <CustomEditor key={location.address} location={location} />;
          })}
      </LocationsLayout>
    );
  })
);

export default LocationContainer;
