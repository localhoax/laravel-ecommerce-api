<template>
    <b-card no-body class="col-md-6 col-sm-12 col-lg-4 item">
        <b-card-body slot="header" class="img-container">
          <img :src="item.thumbnail_url" alt="" class="img-thumbnail">
        </b-card-body>
        <b-card-body>
          <div class="">
          <router-link :to="'/product/' + item.id" tag="h4"><a>{{ item.title }}</a></router-link>
          <p class="truncate">{{ item.description | shortDescription}}</p>
        </div>
        </b-card-body>
        <b-list-group flush class="item-price-container">
          <h3 class="text-center">₹{{ item.price }}</h3>
          <button class="btn btn-success mb-2" :disabled="item.quantity === 0" @click="addItem">Add to cart</button>
        </b-list-group>
    </b-card>
</template>

<script>
import {
  mapActions
} from 'vuex';
export default {
  props: ['item', 'displayList'],
  methods: {
    ...mapActions(['updateCart']),
    addItem() {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      this.updateCart(order);
    }
  },
  filters: {
    shortDescription(value) {
      if (value && value.length > 100) {
        return value.substring(0, 100) + '...';
      } else {
        return value;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background: none;
    border-bottom: 0;
}

.img-container {
  height: 13rem;
  display: flex;
  justify-content: center;
}

.img-thumbnail {
  width: auto;
  height: 100%;
  border: 0;
  object-fit: contain
  
}

.card-body {
  padding-bottom: 0 !important;
  padding-top: 0 !important;
}

.item-price-container {
  padding: 0 !important;
}
</style>
