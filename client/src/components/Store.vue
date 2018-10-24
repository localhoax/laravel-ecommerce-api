<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12 col-lg-12">
            <b-form-group label="Select a category:">
                <b-form-radio-group v-model="category" :options="options" name="radiosStacked">
                </b-form-radio-group>
            </b-form-group>
        </div>
    </div>
    <div class="row">
        <product-item v-for="prod in products" :item="prod" :key="prod.id" :displayList="displayList"></product-item>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductItem from "./product/ProductItem.vue";
export default {
  data() {
    return {
      loaderColor: "#5cb85c",
      loaderSize: "50px",
      displayList: false,
      category: "All",
      options: [
        "All",
        "Laptops",
        "Mobile",
        "Mobile Accessories",
        "Power Bank",
        "Books"
      ]
    };
  },
  computed: {
    ...mapGetters(["products", "isProductLoading"])
  },
  components: {
    "product-item": ProductItem
  },
  methods: {
    ...mapActions(["listenToCategoryList"]),
    changeDisplay(isList) {
      this.displayList = isList;
    }
  },
  mounted(){
    this.listenToCategoryList(this.category);
  },
  watch: {
    category: function(val){
      this.listenToCategoryList(val);
    }
  }
};
</script>

<style>
.is-flex {
  display: flex;
  flex-wrap: wrap;
}

.loadingItem {
  align-items: center;
  justify-content: center;
  display: flex;
}

.is-flex > [class*="col-"] {
  display: flex;
  flex-direction: column;
}

.action-panel {
  margin-bottom: 10px;
  margin-right: 5px;
}
</style>
