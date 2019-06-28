<template>
  <div :class="{'modal': true, 'is-active': active}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <img v-if="logo" src="@/assets/logo.png">
      <div class="level">
        <br>
        <div class="level-item has-text-centered">
          <button class="message button is-small is-static is-outlined is-primary">{{ message }}</button>
        </div>
      </div>
      <div class="level">
        <div class="level-item has-text-centered">
          <button class="loading button is-loading is-outlined is-primary is-large"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: ["message", "active", "logo"]
};
</script>

<style lang="scss" scoped>
button {
  margin-top: -20px;
  border: none;
}
</style>

