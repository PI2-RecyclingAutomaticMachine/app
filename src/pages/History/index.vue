<template lang="pug">
q-page#points.column.justify-center.items-center
  operation-history(:operations='operations')
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import OperationHistory from './components/OperationHistory';

export default {
  name: 'points',
  components: {
    OperationHistory,
  },
  props: {
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'operations',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchOperations',
    ]),
  },
  mounted() {
    this.fetchOperations();
  },
};
</script>

<style lang='stylus' scoped>
</style>
