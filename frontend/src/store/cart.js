import { createSlice } from "@reduxjs/toolkit";

const MAX_ITEM = 5;

const cart = createSlice({
  name: "cart",
  initialState: {
    isFull: false,
    list: [],
  },
  reducers: {
    addItem: (cart, action) => {
      const robot = action.payload;
      const found = cart.list.find((item) => item.name === robot.name);

      if (!found) {
        if (cart.list.length >= MAX_ITEM) {
          cart.isFull = true;
        } else
          cart.list.push({ ...robot, count: 1, outOfStock: robot.stock === 1 });

        return cart;
      }

      found.count++;

      if (found.count >= found.stock) {
        found.outOfStock = true;
      }
    },
    removeItem: (cart, action) => {
      const robot = action.payload;
      const index = cart.list.findIndex((item) => item.name === robot.name);

      const found = cart.list[index];
      if (!found) {
        return cart;
      }

      found.count--;
      found.outOfStock = false;

      if (found.count === 0) {
        cart.isFull = false;
        cart.list.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = cart.actions;

export default cart.reducer;
