const initialState = {
    displayValue: "0",
  };
  
  const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD":
        return {
            ...state,
            displayValue: String(parseFloat(state.displayValue) + parseFloat(action.payload)),
          };
      case "SUBTRACT":
        return {
            ...state,
            displayValue: String(parseFloat(state.displayValue) - parseFloat(action.payload)),
          };
      case "MULTIPLY":
        return {
            ...state,
            displayValue: String(parseFloat(state.displayValue) * parseFloat(action.payload)),
          };
      case "DIVIDE":
        if (parseFloat(action.payload) === 0) {
            // Verifica se a divisão por zero
            return { ...state, displayValue: "Error" };
          }
          return {
            ...state,
            displayValue: String(parseFloat(state.displayValue) / parseFloat(action.payload)),
          };
      case "CLEAR":
        return { ...state, displayValue: "0" };
      case "UPDATE_DISPLAY":
        return { ...state, displayValue: action.payload };
      default:
        return state;
    }
  };
  
  export default calculatorReducer;
  