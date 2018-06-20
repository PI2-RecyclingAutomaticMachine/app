<template lang='pug'>
q-layout(view='lhh Lpr lFf')
  q-layout-header.no-shadow
    q-toolbar.header
      q-toolbar-title
        span {{ $route.name }}
  q-page-container.view
    router-view
  q-layout-footer.no-shadow
    q-toolbar.footer.flex.row.justify-around
      q-btn(
        v-for='(route, index) in routes'
        :key='index'
        :icon='route.icon'
        :color='route.label === $route.name ? "primary" : "grey-13"'
        size='1.2rem'
        outline
        flat
        no-ripple
        no-caps
        @click='$router.push(route.path)'
        )
        span.label {{ route.label }}
</template>

<script>
export default {
  name: 'HomeLqayout',
  data() {
    return {
      routes: [
        {
          label: 'Início',
          icon: 'ion-qr-scanner',
          path: '/home',
        },
        {
          label: 'Histórico',
          icon: 'assignment',
          path: '/home/history',
        },
        {
          label: 'Estatísticas',
          icon: 'assessment',
          path: '/home/statistics',
        },
        {
          label: 'Perfil',
          icon: 'portrait',
          path: '/home/profile',
        },
      ],
    };
  },
};
</script>

<style lang="stylus">
.footer
  .q-btn-inner
    flex-direction column
</style>


<style lang='stylus' scoped>
.header
  background linear-gradient(to left, #1e7fdc, #00c3fb) !important
  text-align center
.footer
  background white !important
  .label
    font-size 0.7rem
.view
  background #f6f6f6
</style>
