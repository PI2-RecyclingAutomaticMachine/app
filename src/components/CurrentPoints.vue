<template lang="pug">
div.points-section.row.justify-between
  div.label.column.justify-center.q-ml-md
    span.text-weight-bold Pontuação do momento
    span.q-mt-sm {{ userName }}
  div.value.q-mr-md.column.items-end.justify-center
    span.text-weight-bolder.points {{ points }}
    span.q-my-xs pontos
</template>

<script>
export default {
  name: 'current-points',
  components: {
  },
  props: {
    userName: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
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
.points-section
  color white
  background $secondary
  .points
    font-size 2rem
</style>
