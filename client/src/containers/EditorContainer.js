import React, { Component } from "react";
import CustomEditor from "./../components/CustomEditor";
import styled from "styled-components";

const EditorLayout = styled.div`
  width: 50%;
  display: flex;
`;

class EditorContainer extends Component {
  render() {
    return (
      <EditorLayout>
        <CustomEditor />
      </EditorLayout>
    );
  }
}

export default EditorContainer;
