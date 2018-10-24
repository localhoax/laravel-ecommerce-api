<template>
        <tr>
            <td data-th="Product">
                    <div class="hidden-xs-down col-sm-3 col-md-3">
                        <img :src="cartItem.thumbnail_url" alt="" class="img-thumbnail hidden-xs">
                    </div>
                    <div class="col-xs-12 col-sm-9 col-md-9">
                        <h5 class="text-uppercase"> {{ cartItem.title}}</h5>
                    </div>
            </td>
            <td data-th="Price">{{cartItem.price}}</td>
            <td data-th="Quantity">
                <input type="number" class="form-control text-center" v-model="cartItem.quantity" @input.prevent="updateQuantity" min="1" max="10"/>
            </td>
            <td data-th="Subtotal" class="text-center">₹{{subtotal}}</td>
            <td data-th="" class="actions">
                <b-button danger @click.prevent="removeItem">
                    <i class="fa fa-trash"></i>
                </b-button>
            </td>
        </tr>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["cartItem"],
  computed: {
    subtotal() {
      return this.cartItem.quantity * this.cartItem.price;
    }
  },
  methods: {
    ...mapActions(["updateCart", "removeItemInCart"]),
    removeItem() {
      let vm = this;
      this.removeItemInCart({
        item: vm.cartItem
      });
    },
    updateQuantity(evt) {
      let vm = this;
      this.updateCart({
        item: vm.cartItem,
        quantity: parseInt(event.target.value)
      });
    }
  }
};
</script>
<style lang="scss">

</style>
