import React from "react";
import MapContainer from "./containers/MapContainer";
import { Provider } from "mobx-react";
import stores from "./stores";
import styled from "styled-components";

const AppLayout = styled.div`
  text-align: center;
`;

function App() {
  return (
    <React.Fragment>
      <Provider {...stores}>
        <AppLayout className="App">
          <p>React Demo: Google Map</p>
          <MapContainer />
        </AppLayout>
      </Provider>
    </React.Fragment>
  );
}

export default App;
