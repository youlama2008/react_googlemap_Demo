import React from "react";
import CustomEditor from "./../components/CustomEditor";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

const EditorLayout = styled.div`
  width: 50%;
  display: flex;
`;

const EditorContainer = inject("locationStore")(
  observer(props => {
    return (
      <EditorLayout>
        {props.locationStore.locationList &&
          props.locationStore.locationList.map(location => {
            return <CustomEditor key={location.address} location={location} />;
          })}
      </EditorLayout>
    );
  })
);

export default EditorContainer;
