export const add = () => ({ type: "ADD" });
export const subtract = () => ({ type: "SUBTRACT" });
export const multiply = () => ({ type: "MULTIPLY" });
export const divide = () => ({ type: "DIVIDE" });
export const clear = () => ({ type: "CLEAR" });
export const updateDisplay = (value) => ({ type: "UPDATE_DISPLAY", payload: value });
