<template>
  <div>
    <app-header></app-header>
    <message-component></message-component>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header";
import MessageComponent from './components/MessageComponent'
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    appHeader: Header,
    'message-component': MessageComponent
  },
  methods: {
    ...mapActions(["getShoppingCart", "listenToProductList"])
  },
  created() {
    let uid = this.$store.getters.currentUser.uid;
    this.getShoppingCart({
      uid,
      currentCart: this.$store.getters.cartItemList
    });
  }
};
</script>

<style lang="scss">
</style>
