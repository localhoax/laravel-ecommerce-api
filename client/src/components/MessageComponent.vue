<template>
  <div v-if="showMessageBar" :class="(showMessageBar?'':'hidden') + '  message-bar'">
    <div :class="messageClass + 'text-center'">
      <button  class="btn btn-link close-btn" @click="closeMessageBar">
        <i class="fa fa-times"></i>
      </button>
      <div>{{ currentMessage }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MessageComponent",

  computed: {
    ...mapGetters(["messages"]),
    showMessageBar() {
      return this.messages.message && this.messages.message.length > 0;
    },
    messageClass() {
      let mgClass = this.messages.messageClass;
      return (
        "col-xs-12 panel panel-" +
        mgClass +
        " " +
        (this.showMessageBar ? "" : "hidden")
      );
    },
    currentMessage() {
      return this.messages.message;
    }
  },
  methods: {
    ...mapActions(["clearMessage"]),
    closeMessageBar() {
      this.clearMessage();
    }
  }
};
</script>

<style scoped>
.message-bar {
  position: fixed;
  top: 0;
  left: 50%;
  width: 50%;
  min-height: 50px;
  z-index: 9999;
  margin-left: -25%;
  margin-top: 80px;
  padding: 0 5px;
}
.message-bar .close-btn {
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  border: 0 !important;
  padding-top: 0.5rem;
}
.message-bar .panel {
  border-color: transparent;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-radius: 5px;
  padding-right: 25px;
}
.panel {
  padding: 10px 15px;
}
.panel-danger {
  background-color: #d9534f;
  color: #fff;
}
.panel-success {
  background-color: #5cb85c;
  color: #fff;
}
.panel-warning {
  background-color: #f0ad4e;
  color: #fff;
}
</style>