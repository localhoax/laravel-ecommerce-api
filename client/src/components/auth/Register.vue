<template>
    <div class="container">
        <b-row class="justify-content-center">
            <b-col md="12" lg="6">
                <b-card>
                    <b-form @submit.prevent="registerByEmailLocal">
                        <b-form-group id="label--name" label="Name" label-for="input--name">
                            <b-form-input id="input--name" type="text" required placeholder="Enter fullname" v-model="formData.name"></b-form-input>
                        </b-form-group>
                        <b-form-group id="label--email" label="Email Address" label-for="input--email">
                            <b-form-input id="input--email" type="email" required placeholder="Enter email" v-model="formData.email"></b-form-input>
                        </b-form-group>
                        <b-form-group id="label--password" label="Password" label-for="input--password">
                            <b-form-input id="input--password" type="password" required placeholder="Enter password" v-model="formData.password"></b-form-input>
                        </b-form-group>
                        <b-form-group id="label--confirm-password" label="Confirm Password" label-for="input--confirm-password">
                            <b-form-input id="input--confirm-password" type="password" required placeholder="Re-enter password" v-model="formData.confirmPassword"></b-form-input>
                        </b-form-group>
                        <b-row class="justify-content-center">
                            <b-button type="submit" variant="primary" class="col-md-2 col-lg-3">Register</b-button>
                        </b-row>
                        <b-row class="justify-content-center">
                            <router-link to="/login">Already have an account? Login.</router-link>
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
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      isLoading: false
    };
  },
  computed: {
    onSubmit(evt) {}
  },
  methods: {
    ...mapActions(["clearMessage", "addMessage", "registerByEmail"]),
    registerByEmailLocal() {
      this.isLoading = true;

      if (this.formData.password === this.formData.confirmPassword) {
        let data = {
          email: this.formData.email,
          password: this.formData.password
        };
        this.registerByEmail(data)
          .then(() => {
            this.clearMessage();
            this.$router.push({ name: "store" });
          })
          .catch(error => {
            // console.log('register error', error);
            let message_obj = {
              message: error.message,
              messageClass: "danger",
              autoClose: true
            };
            this.addMessage(message_obj);
          })
          .then(() => {
            this.isLoading = false;
          });
      } else {
        let msg = {
          message: "Passwords don't match.",
          autoClose: true,
          messageClass: "warning"
        };
        this.addMessage(msg);
        this.isLoading = false;
      }
    }
  }
};
</script>
