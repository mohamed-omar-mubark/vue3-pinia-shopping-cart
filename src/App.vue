<template>
  <main>
    <div class="container">
      <strong class="title">(Vue3 - Vite - Pinia) shopping cart</strong>

      <strong class="title">Total: ${{ cartTotalPrice }}</strong>

      <div class="shop-items">
        <div class="single-item" v-for="item in items" :key="item.id">
          <span class="item-name">{{ item.name }} : </span>
          <span class="item-price">${{ item.price }}</span>
          <div class="actions">
            <button @click="removeFromCart(item)" type="button">-</button>
            <span class="item-quantity"></span>
            <button @click="addToCart(item)">+</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";
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

  computed: {
    ...mapState(useCartStore, ["cartTotalPrice"]),
  },

  methods: {
    ...mapActions(useCartStore, ["addToCart", "removeFromCart"]),
  },
};
</script>

<style lang="scss" scoped>
@import "./modules/shopping-cart/style/shopping-cart.scss";
</style>
