import React from "react";
import CounterApp from "./CounterApp";
import { Provider } from "react-redux";
import { store } from "./RTK/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <CounterApp />
      </Provider>
    </>
  );
}
