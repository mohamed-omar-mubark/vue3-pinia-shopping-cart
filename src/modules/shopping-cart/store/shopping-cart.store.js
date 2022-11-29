import { defineStore } from "pinia";

let shoppingCart = localStorage.getItem("cart");

export default defineStore("cart", {
  state: () => ({
    // cart
    cart: shoppingCart ? JSON.parse(shoppingCart) : [],
  }),

  getters: {
    // getters to count the total number of items in the cart
    cartItemsCount(state) {
      return state.cart.length;
    },

    // getters to calculate the total price of the items in the cart
    cartTotalPrice(state) {
      let total = 0;

      state.cart.forEach((item) => {
        total += item.price * item.quantity;
      });

      return total;
    },
  },

  actions: {},
});
