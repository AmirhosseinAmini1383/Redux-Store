import React from "react";
import UserComponent from "./UserComponent";
import { Provider } from "react-redux";
import store from "../redux/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <UserComponent />
      </div>
    </Provider>
  );
}

export default App;
