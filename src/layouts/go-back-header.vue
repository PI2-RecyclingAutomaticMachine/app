<template lang='pug'>
q-layout(view='lhh Lpr lFf')
  q-layout-header.no-shadow
    q-toolbar.header
      q-btn(
        icon='arrow back'
        flat
        @click='$router.push("/get-in")'
        ).no-padding.back-button
      q-toolbar-title.title
        | {{ $route.name }}
  q-page-container
    router-view
</template>

<script>
export default {
  name: 'GoBackHeader',
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style lang='stylus' scoped>
.header
  background linear-gradient(to left, #1e7fdc, #00c3fb) !important
  .back-button
    position absolute
  .title
    text-align center
    font-weight 400
</style>
