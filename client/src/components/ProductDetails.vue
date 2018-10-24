<template>
<div class="container">
  <div class="col-md-12">
    <div class="thumbnail">
      <img class="img-fluid" :src="item.thumbnail_url" alt="">
      <div class="caption-full">
        <h4 class="pull-right">₹{{ item.price }}</h4>
        <h4> {{ item.title }}</h4>
        <p> {{ item.description }} </p>
      </div>
      <div class="ratings">
        <span>{{ item.quantity }} left in stock</span>
        <p class="pull-right">
            <button @click="addItem" :disabled="item.quantity === 0" class="btn btn-success">
                Add to cart
            </button>
        </p>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
  },
  data() {
    return {
      loaderColor: "#5cb85c",
      loaderSize: "50px"
    };
  },
  computed: {
    ...mapGetters(["isProductLoading", "products"]),
    item() {
      let id = this.$route.params.id;
      if (this.products.length >= id) {
        let filterArr = this.products.filter(item => {
          return item.id == id;
        });
        if (filterArr.length > 0) {
          return filterArr[0];
        }
      }
      return {};
    }
  },
  methods: {
    ...mapActions(["updateCart"]),
    addItem() {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      // console.log(order);
      this.updateCart(order);
    }
  }
};
</script>

<style scoped>
.caption-full {
  padding-right: 10px;
  padding-left: 10px;
}

.ratings {
  padding-right: 10px;
  padding-left: 10px;
  color: #d17581;
}
</style>
