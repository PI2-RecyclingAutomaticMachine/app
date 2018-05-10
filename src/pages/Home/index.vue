<template lang="pug">
q-page#home.column.justify-center.items-center
  qriously(:value='cpf' :size='250')
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
    cpf() {
      return this.user.cpf ? this.user.cpf : '';
    },
  },
  methods: {
  },
};
</script>

<style lang='stylus' scoped>
</style>
