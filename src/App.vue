<template>
  <main>
    <div class="container">
      <strong class="title">(Vue3 - Vite - Pinia) shopping cart</strong>

      <div class="shop-items">
        <div class="single-item" v-for="item in items" :key="item.id">
          <span class="item-id">#{{ item.id }} - </span>
          <span class="item-name">{{ item.name }} - </span>
          <span class="item-price">${{ item.price }}</span>
        </div>
      </div>
    </div>

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
