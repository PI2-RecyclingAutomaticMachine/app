<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions([
      'checkIfLogged',
    ]),
  },
  mounted() {
    this.checkIfLogged();
  },
};
</script>

<style>
</style>
