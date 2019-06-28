<template>
  <!-- NAVIGATION BAR -->
  <nav class="level">
    <div class="level-left"></div>
    <div v-if="user" class="level-right">
      <img id="user" :src="user.photoURL">
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
  mounted() {
    if (!this.user) {
      this.$router.push("/");
    }
  },
  methods: {
    signOut() {
      const This = this;
      this.$store.dispatch("updateUser", null).then(() => {
        firebase
          .auth()
          .signOut()
          .then(() => This.$router.push("/"));
      });
    },
    flashMessage(message, type) {
      this.$toast.open({
        message: message,
        position: "is-bottom",
        type: type
      });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  watch: {
    user() {
      if (this.user) {
        this.flashMessage(`Welcome ${this.user.email}`, "is-primary");
      }
    }
  }
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

img#user {
  border-radius: 50%;
  height: 30px;
  margin-right: 8px;
}
</style>
