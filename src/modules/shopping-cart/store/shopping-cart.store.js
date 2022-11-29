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

  actions: {
    // action to add an item to the cart
    addToCart(item) {
      let cart = this.cart;

      let found = cart.find((product) => product.id === item.id);

      // if the item is already in the cart, increase the quantity
      if (found) {
        found.quantity++;
      } else {
        // if the item is not in the cart, add it
        cart.push({
          ...item,
          quantity: 1,
        });
      }

      this.cart = cart;

      // save the cart to the local storage
      localStorage.setItem("cart", JSON.stringify(cart));
    },
  },
});
