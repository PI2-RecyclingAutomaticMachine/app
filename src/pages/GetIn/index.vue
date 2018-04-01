<template lang="pug">
q-page#get-in
  span.title M
  span.subtitle Maquina Automática de Reciclage
  q-page-sticky(position='bottom')
    div.buttons
      q-btn(flat no-ripple @click='$router.push("/login")').login Entrar
      q-btn(flat no-ripple @click='$router.push("/signup")').signup Cadastro
</template>

<script>
export default {
  name: 'get-in',
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
  },
  methods: {
  },
};
</script>

<style lang='stylus' scoped>
#get-in
  background linear-gradient(to bottom, #1ea3e6, #0ac1fa)
  display flex
  flex-direction column
  align-items center
  justify-content center
  .title, .subtitle
    color white
  .title
    text-shadow 0px 2px 2px rgba(0, 0, 0, 0.5)
    font-size 5rem
    font-weight 700
  .subtitle
    font-size 1.5rem
    text-align center
  .buttons
    display flex
    flex-direction row
    width 100vw
    .login, .signup
      background white
      border-radius 0
      width 100%
      height 10vh
      color #444444
      font-weight 400
    .signup
      background #f6f6f6
</style>
