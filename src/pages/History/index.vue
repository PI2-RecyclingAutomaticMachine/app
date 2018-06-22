<template lang="pug">
q-page#points.column.justify-center.items-center
  operation-history(v-if='operations.length > 0' :operations='operations')
  span(v-else).q-headline.text-center Você ainda não fez inseriu nenhuma garrafa
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
.q-headline
  font-size 2em
  color #7d8597
</style>
