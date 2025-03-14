import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import DessertsList from "./components/DessertsList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <DessertsList />
      </div>
    </Provider>
  );
}

export default App;
