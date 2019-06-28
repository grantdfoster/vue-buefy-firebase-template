<template>
  <!-- NAVIGATION BAR -->
  <nav class="level">
    <div class="level-left"></div>
    <div class="level-right">
      <button
        class="button is-small is-rounded is-outlined is-info signout"
        @click="signOut()"
      >Sign Out</button>
    </div>
  </nav>
</template>

<script>
const firebase = require("firebase");

export default {
  name: "Navbar",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    signOut() {
      firebase.auth().signOut();
      this.$router.push("/");
    },
    flashMessage(message, type) {
      this.$toast.open({
        message: message,
        position: "is-bottom",
        type: type
      });
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
nav.level {
  background-color: #221f1f;
  box-shadow: 3px 1px #111111;
  height: 40px;
}

button.signout {
  margin-right: 12px;
}
</style>
