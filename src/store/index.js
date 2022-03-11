import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };




/////////////////////////////////////////////////////////////////////////
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    INC(state) {
      state.counter++;
    },
    DEC(state) {
      state.counter--;
    },
    INCx(state, action) {
      state.counter = state.counter + action.payload;
    },
    TOG(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

///////////////////////////////////////////////////////////////////////

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
  reducer:  counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
