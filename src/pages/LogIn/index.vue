<template lang="pug">
q-page#login
  div.brand
    span.title M
    span.subtitle Maquina Automática de Reciclage
  div.form
    div.inputs
      q-input(
        v-model='cpf'
        float-label='CPF'
        color='white'
        dark
        :maxlength='14'
        :after='[{icon: "ion-card"}]'
        @input='formatCpf'
        ).input
      q-input(
        v-model='password'
        float-label='Senha'
        color='white'
        dark
        type='password'
        :after='[{icon: "ion-ios-locked-outline"}]'
        no-pass-toggle
        ).input
    div.actions
      q-btn(
        flat
        rounded
        no-ripple
        no-caps
        label='Entrar'
        @click='logUser'
        ).login
      router-link(to='/get-in').go-back voltar
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'login',
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
    return {
      cpf: '',
      password: '',
    };
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'login',
    ]),
    formatCpf(cpf) {
      const { length } = cpf;
      if (length === 3 || length === 7) {
        this.cpf += '.';
      } else if (length === 11) {
        this.cpf += '-';
      }
    },
    makeIconsWhite() {
      const icons = document.querySelectorAll('.q-icon');
      icons.forEach((icon) => { icon.style.color = 'white'; });
    },
    makeLabelsWhite() {
      const labels = document.querySelectorAll('.q-if-label');
      labels.forEach((label) => { label.style.color = 'white'; });
    },
    async logUser() {
      try {
        await this.login({ cpf: this.cpf, password: this.password });
        this.$router.push('/home');
      } catch (err) {
        this.$log.error(err);
        this.$q.notify({
          type: 'negative',
          message: 'Ocorreu um erro. Por favor, tente novamente!',
        });
      }
    },
  },
  mounted() {
    this.makeIconsWhite();
    this.makeLabelsWhite();
  },
};
</script>

<style lang='stylus' scoped>
#login
  background linear-gradient(to bottom, #1ea3e6, #0ac1fa)
  display grid
  .brand
    display flex
    flex-direction column
    justify-content flex-end
    align-items center
  .title, .subtitle
    color white
  .title
    text-shadow 0px 2px 2px rgba(0, 0, 0, 0.5)
    font-size 5rem
    font-weight 700
  .subtitle
    font-size 1.5rem
    text-align center
  .form
    display flex
    flex-direction column
    align-items center
    justify-content space-around
    .inputs
      width 90%
      .input
        margin-top 15px
    .actions
      display flex
      flex-direction column
      align-items center
      .login
        background white
        width 50vw
        height 7vh
        font-size 1.2rem
        color #444444
        font-weight 400
      .go-back
        padding-top 10px
        color white
</style>
