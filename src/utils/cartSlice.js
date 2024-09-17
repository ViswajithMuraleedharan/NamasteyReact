import { createSlice, current } from "@reduxjs/toolkit";
//creating slice, a slice object has 3 parts: name, initialState, reducers
const cartSlice = createSlice({
  name: "cart", //name on which this slice is called
  initialState: {
    //what this slice contains initially
    items: [],
  },
  reducers: {
    //the functions used to change the state
    addItem: (state, action) => {
      //in vanilla Redux (older redux) => we got error while directly mutating stast => DON'T MUTATE THE STATE.
      //and to avoid this, we used to make a copy of the state, change it and returned this copy
      //   const newState = [...state];
      //   newState = newState.push(action.payload);
      //   return newState;

      //but in newer redux, we have to mutate the state directly
      //each function has 2 parameters: the state and the function that directly changes the state

      //here, it is using immer.js in background which takes the 2 states, find the difference and modifys for just that change
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      console.log(current(state)); //give the current value of state
      console.log(state); // this will only give a proxyobject

      //When clearing we can either mutate the state or return a new state
      //   state.items.length = 0;
      return { items: [] }; //this new state will replace the original state
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
