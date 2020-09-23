import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Users from "./components/Users";

const App = () => {
  return 
  (
      <Provider store={store}>
          <Users />
      </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
