//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";


///////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INC") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === "DEC") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }
//   if (action.type === "INCx") {
//     return { counter: state.counter + action.payload, showCounter: state.showCounter };
//   }

//   if(action.type === 'TOG') {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }

//   return state;
// };

const store = configureStore({
  reducer: { counter: counterReducer, Auth: authReducer },
});

export default store;
