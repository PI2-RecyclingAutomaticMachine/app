<template lang="pug">
q-card#bottle-card
  q-card-main.row.justify-between.items-center.q-pa-sm
    div.column.justify-center.q-ml-md
      span.text-weight-bold.label {{ bottle.label }}
      span {{ weigthLabel }}
    div.q-mr-md.column.items-end.justify-center
      span.text-weight-bolder.count {{ count }}
      span {{ countLabel }}
</template>

<script>
export default {
  name: 'bottle-card',
  components: {
  },
  props: {
    bottle: {
      type: Object,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    weigthLabel() {
      const totalWeight = this.count * this.bottle.weight;
      return `total de ${totalWeight}g`;
    },
    countLabel() {
      return `unidade${this.count !== 1 ? 's' : ''}`;
    },
  },
  methods: {
  },
};
</script>

<style lang='stylus' scoped>
@import '~variables'
#bottle-card
  background $secondary
  color #4b4b4b
  .label
    font-size 1.2rem
  .count
    font-size 2rem
</style>
