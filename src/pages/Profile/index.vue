<template lang="pug">
q-page#profile
</template>

<script>
export default {
  name: 'profile',
  components: {
  },
  async beforeRouteEnter(to, from, next) {
    try {
      next();
    } catch (err) {
      this.$log.error(err);
    }
  },
  props: {
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style lang='stylus' scoped>
</style>
