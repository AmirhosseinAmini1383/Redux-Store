import React from "react";
import MyStore from "./MyStore/MyStore";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
function App() {
  return (
    <Provider store={Store}>
      <div>
        <MyStore />
      </div>
    </Provider>
  );
}

export default App;
