<template>
    <div class="container">
        <b-row class="justify-content-center">
            <b-col md="12" lg="6">
                <b-card>
                    <b-form @submit.prevent="loginWithEmailLocal">
                        <b-form-group id="label--email" label="Email Address: " label-for="input--email">
                            <b-form-input id="input--email" type="email" required placeholder="Enter email" v-model="formData.email"></b-form-input>
                        </b-form-group>
                        <b-form-group id="label--password" label="Password: " label-for="input--password">
                            <b-form-input id="input--password" type="password" required placeholder="Enter password" v-model="formData.password"></b-form-input>
                        </b-form-group>
                        <b-form-group id="label--checkbox">
                            <b-form-checkbox v-model="formData.remember">Remember me</b-form-checkbox>
                        </b-form-group>
                        <b-row class="justify-content-center">
                            <b-button type="submit" variant="primary" :disabled="isLoading" class="col-md-2 col-lg-3">Login</b-button>
                        </b-row>
                        <b-row class="justify-content-center">
                            <router-link to="/register">Don't have an account? Sign up.</router-link>
                        </b-row>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
        remember: false
      },
      isLoading: false
    };
  },
  methods: {
    ...mapActions(["addMessage", "clearMessage", "loginWithEmail"]),
    loginWithEmailLocal() {
      this.isLoading = true;
      let data = {
        email: this.formData.email,
        password: this.formData.password,
        remember: this.formData.remember
      };
      this.loginWithEmail(data)
        .then(() => {
          this.clearMessage();
          this.$router.push({
            name: "store"
          });
        })
        .catch(err => {
          let msg = {
            message: err.message,
            messageClass: "danger",
            autoClose: true
          };
          this.addMessage(msg);
        })
        .then(() => {
          this.isLoading = false;
        });
    }
  },
  computed: {
    onSubmit(evt) {
      return;
    },
    onReset(evt) {
      return;
    }
  }
};
</script>
