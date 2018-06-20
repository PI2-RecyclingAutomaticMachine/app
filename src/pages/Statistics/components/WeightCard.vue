<template lang="pug">
q-card#weight-card
  q-card-main.row.justify-between.items-center.q-pa-sm
    div.column.justify-center.q-ml-md
      span.text-weight-bold.weight {{ weight }}
      span gramas
    div.q-mr-md.column.items-end.justify-center
      span.text-weight-bolder.label {{ label }}
</template>

<script>
export default {
  name: 'weight-card',
  components: {
  },
  props: {
    weight: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
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
@import '~variables'
#weight-card
  background $secondary
  color #4b4b4b
  .weight
    font-size 2rem
  .label
    font-size 1.8rem
</style>
