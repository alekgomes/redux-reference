import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cake from "./components/cake/Cake";
import HookCake from "./components/cake/HookCake";
import IceCream from "./components/iceCream/iceCream";
import HookIceCream from "./components/iceCream/HookIceCream";

const App = () => {
  return (
    <Provider store={store}>
      <Cake />
      <HookCake />
      <IceCream />
      <HookIceCream />
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
