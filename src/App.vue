<template>
  <main>
    <h1>(Vue3 - Vite - Pinia) shopping cart</h1>

    <button v-for="item in items" :key="item.id" @click="addToCart(item)">
      {{ item.name }}
    </button>
  </main>
</template>

<script>
import { mapActions } from "pinia";
import useCartStore from "@/modules/shopping-cart/store/shopping-cart.store";

export default {
  name: "App",

  setup() {
    return {
      items: [
        {
          id: 1,
          name: "Apple",
          price: 1.2,
        },
        {
          id: 2,
          name: "Orange",
          price: 1.5,
        },
        {
          id: 3,
          name: "Banana",
          price: 1.8,
        },
      ],
    };
  },

  methods: {
    ...mapActions(useCartStore, ["addToCart"]),

    addItem(item) {
      this.addToCart(item);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./modules/shopping-cart/style/shopping-cart.scss";
</style>
