import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import calculatorReducer from "./reducers/calculatorReducer";
import Calculator from "./components/Calculator";

const store = createStore(calculatorReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
