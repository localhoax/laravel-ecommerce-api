<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <router-link :to="{path: '/store'}" class="navbar-brand cursor-pointer">
                  <img src="./../assets/logo.png" alt="" class="nav-logo">
                  <span> Home Shop </span>
                </router-link>
                <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                <!-- <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                  <b-nav-item right>
                      <router-link to="/cart" tag="button" class=" btn btn-success">
                      Checkout <span class="badge">{{ numItems }} ₹ {{ cartValue }}</span>
                    </router-link>
                  </b-nav-item>
                <b-nav-item-dropdown right v-if="isLoggedIn">
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                        <strong><em>{{this.userEmail}}</em></strong>
                    </template>
                    <b-dropdown-item href="#" disabled>Profile</b-dropdown-item>
                    <b-dropdown-item>
                      <a @click.prevent="logout">Logout</a>
                    </b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item right v-else>
                    <router-link to="/login" tag="div" class="nav-item cursor-pointer">Login</router-link>
                </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ref } from "./../config/firebase.config";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isLoggedIn", "cartValue", "currentUser", "cartItemList"]),
    numItems() {
      return this.cartItemList.reduce((total, item) => {
        total += item.quantity;
        return total;
      }, 0);
    },
    userEmail() {
      // console.log(this.currentUser);
      return this.isLoggedIn ? this.currentUser.email : "";
    }
  },
  mounted() {},
  methods: {
    ...mapActions(["logout"])
  }
};
</script>


<style lang="scss">
  .nav-logo {
    height: 44px !important;
    border-radius: 50%;
  }

  .nav-brand {
    span {
      
    }
  }

  .navbar {
    border: 1px solid black;
    border-left: 0;
    border-right: 0;
  }
</style>
