<template lang="pug">
q-page#signup
  div.form
    q-field(
      error-label='Nome inválido'
      :error='submitted && !isNameValid'
      ).field
      q-input(
        v-model='name'
        float-label='Name'
        :after='[{icon: "short text"}]'
        ).input
    q-field(
      error-label='E-mail inválido'
      :error='submitted && !isEmailValid'
      ).field
      q-input(
        v-model='email'
        float-label='E-mail'
        :after='[{icon: "mail"}]'
        ).input
    q-field(
      error-label='CPF inválido'
      :error='submitted && !isCPFValid'
      ).field
      q-input(
        v-model='cpf'
        float-label='CPF'
        :maxlength='14'
        :after='[{icon: "ion-card"}]'
        @input='formatCpf'
        ).input
    q-field(
      error-label='A senha deve ter no mínimo 6 caracteres'
      :error='submitted && !isPasswordValid'
      ).field
      q-input(
        v-model='password'
        float-label='Senha'
        type='password'
        :after='[{icon: "ion-ios-locked-outline"}]'
        no-pass-toggle
        ).input
    q-field(
      error-label='As senhas não conferem'
      :error='submitted && !isConfirmPasswordValid'
      ).field
      q-input(
        v-model='confirmPassword'
        float-label='Confirmar Senha'
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
      label='Criar'
      @click='submit'
      ).create
    router-link(to='/get-in').go-back voltar
</template>

<script>
import { mapActions } from 'vuex';

// import { register } from '../../store/user/actions';
import { isCPFValid } from '../../lib/user';

export default {
  name: 'signup',
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
      submitted: false,
      name: '',
      email: '',
      cpf: '',
      password: '',
      confirmPassword: '',
      emailRegex: new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    };
  },
  computed: {
    isNameValid() {
      return !!this.name;
    },
    isEmailValid() {
      const emailMatchesRegex = this.emailRegex.test(this.email);
      return emailMatchesRegex && !!this.email;
    },
    isCPFValid() {
      const isValid = isCPFValid(this.cpf);
      return isValid && !!this.cpf;
    },
    isPasswordValid() {
      return !!this.password && this.password.length >= 6;
    },
    isConfirmPasswordValid() {
      const passwordMatches = this.password === this.confirmPassword;
      return passwordMatches && !!this.confirmPassword;
    },
    isFormValid() {
      return this.isNameValid &&
        this.isEmailValid &&
        this.isCPFValid &&
        this.isPasswordValid &&
        this.isConfirmPasswordValid;
    },
    user() {
      return {
        name: this.name,
        email: this.email,
        cpf: this.cpf,
        password: this.password,
      };
    },
  },
  methods: {
    ...mapActions([
      'register',
    ]),
    formatCpf(cpf) {
      const { length } = cpf;
      if (length === 3 || length === 7) {
        this.cpf += '.';
      } else if (length === 11) {
        this.cpf += '-';
      }
    },
    displayErrorMessage(message) {
      this.$q.notify({
        type: 'negative',
        message,
      });
    },
    async attemptToSubmit() {
      this.submitted = true;
      let valueToReturn = false;

      if (this.isFormValid) {
        const { data } = await this.register(this.user);
        valueToReturn = data;
      } else {
        valueToReturn = false;
      }

      return valueToReturn;
    },
    async submit() {
      try {
        const returnValue = await this.attemptToSubmit();
        if (returnValue) {
          this.$router.push('login');
          this.$q.notify({
            type: 'positive',
            message: 'Cadastro realizado com sucesso',
          });
        } else {
          this.displayErrorMessage('Formulário inválido');
        }
      } catch (err) {
        this.$log.error(err);
        this.displayErrorMessage('Ocorreu um erro. Por favor tente novamente');
      }
    },
  },
};
</script>

<style lang='stylus' scoped>
#signup
  display grid
  grid-template-rows 6.5fr 3.5fr
  .form
    display flex
    flex-direction column
    align-items center
    justify-content center
    .field
      margin-bottom: 5px
      width 90%
  .actions
    display flex
    flex-direction column
    align-items center
    .create
      background #00b3f5
      width 50vw
      height 7vh
      font-size 1.2rem
      color white
      font-weight 400
    .go-back
      padding-top 10px
      color #00b3f5
</style>
