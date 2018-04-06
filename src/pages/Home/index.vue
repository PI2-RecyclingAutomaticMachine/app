<template lang="pug">
q-page#home.column.justify-center.items-center
  qriously(value='user.cpf' :size='250')
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
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
    ...mapGetters([
      'user',
    ]),
  },
  methods: {
  },
};
</script>

<style lang='stylus' scoped>
</style>
