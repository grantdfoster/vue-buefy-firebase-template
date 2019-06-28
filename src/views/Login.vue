<template>
  <!-- NAVIGATION BAR -->
  <div class="container is-fluid">
    <img id="logo" src="@/assets/logo.png">
    <br>
    <button
      :class="{'button': true, 'is-rounded': true, 'is-outlined': true, 'is-primary': true, 'is-loading': isLoading}"
      @click="signIn()"
    >{{ buttonText }}</button>
  </div>
</template>

<script>
// the firebase app is configured in firebase.js
// the firebase app is initiatied in main.js
const firebase = require("firebase");

export default {
  name: "Login",
  data() {
    return {
      buttonText: "Sign In with Google",
      isLoading: true
    };
  },
  mounted() {
    const This = this;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authorize(user)
          .then(() => {
            This.$store
              .dispatch("updateUser", user)
              .then(() => This.continue());
          })
          .catch(domain => {
            this.flashMessage(`${domain} is not allowed!`, "is-danger");
            firebase.auth().signOut();
          });
      } else {
        this.isLoading = false;
      }
    });
  },
  methods: {
    continue() {
      this.$router.push("/home");
    },
    authorize(user) {
      return new Promise((resolve, reject) => {
        const allowedDomains = ["wework.com"];
        const domain = user.email.split("@")[1];
        allowedDomains.includes(domain) ? resolve() : reject(domain);
      });
    },
    signIn() {
      this.isLoading = true;
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account"
      });
      firebase
        .auth()
        .signInWithPopup(provider)
        .catch(error => {
          const errorMessage = JSON.parse(error.message);
          this.flashMessage(
            `${errorMessage.error.code} - ${errorMessage.error.message}`,
            "is-danger"
          );
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
  computed: {}
};
</script>

<style lang="scss" scoped>
img#logo {
  height: 200px;
  margin-top: 150px;
  margin-bottom: 20px;
}
</style>
