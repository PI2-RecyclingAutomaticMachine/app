<template lang="pug">
q-card(color='white')#operation-history
  q-card-main.q-pa-xs
    operation-item(
      v-for='(operation, index) in operations'
      :key='index'
      :operation='operation'
      )
</template>

<script>
import OperationItem from './OperationItem';

export default {
  name: 'operation-history',
  components: {
    OperationItem,
  },
  props: {
    operations: {
      type: Array,
      required: true,
    },
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
#operation-history
  max-height 75vh
  overflow auto
  width 90vw
</style>
