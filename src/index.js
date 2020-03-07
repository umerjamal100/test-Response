import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./styles.css";
import LandingPage from './Container/LandingPage'
import store from './Redux/Store'

// const store = createStore(rootReducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <p>Bot handles additon multiplication,divide,subtration and empty and wrong input validartion</p>
      <LandingPage />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
