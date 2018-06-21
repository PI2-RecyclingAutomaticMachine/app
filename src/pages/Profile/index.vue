<template lang="pug">
  q-page#profile
    div.user-card-profile.column.justify-center
      q-card(color='white' text-color='light').q-mx-md
        q-card-main
          user-info(:user='user' v-if='!isEditing')
          user-edit(:user='user' @edition='getForm' v-else)
        q-card-actions
          q-btn(:label='isEditing ? "salvar" : "editar"'
          @click='toggleEdition' rounded flat
          text-color='white').edit-button.btn-primary
    div.logout-button-profile.column.justify-center
      q-btn(label='sair' @click='handlesLogout' rounded flat
      text-color='white').q-mx-md.btn-negative
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import UserInfo from './user-info';
import UserEdit from './user-edit';

export default {
  name: 'profile',
  components: {
    UserInfo,
    UserEdit,
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
      isEditing: false,
      form: {
        name: '',
        email: '',
      },
      emailRegex: new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    };
  },
  computed: {
    ...mapGetters(['user']),
    isFormValid() {
      return this.isNameValid &&
        this.isEmailValid;
    },
    isNameValid() {
      return !!this.form.name;
    },
    isEmailValid() {
      const emailMatchesRegex = this.emailRegex.test(this.form.email);
      return emailMatchesRegex && !!this.form.email;
    },
  },
  methods: {
    ...mapActions([
      'logout',
      'updateUser',
    ]),
    handlesLogout() {
      this.logout();
      this.$router.push('/get-in');
    },
    getForm(form) {
      this.form.name = form.name;
      this.form.email = form.email;
    },
    toggleEdition() {
      if (this.isEditing) {
        this.validateForm();
      } else {
        this.isEditing = !this.isEditing;
      }
    },
    validateForm() {
      if (this.isFormValid) {
        this.update();
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Reveja os campos',
          position: 'top',
        });
      }
    },
    async update() {
      try {
        await this.updateUser({
          id: this.user.id,
          ...this.form,
        });
        this.$q.notify({
          type: 'positive',
          message: 'Informações atualizadas com sucesso!',
          position: 'top',
        });
        this.isEditing = !this.isEditing;
      } catch (error) {
        this.$q.notify({
          type: 'negative',
          message: 'Ocorreu um erro. Por favor, tente novamente!',
          position: 'top',
        });
      }
    },
  },
};
</script>

<style lang='stylus' scoped>
  #profile
    display grid
    grid-template-rows 9fr 1fr
  .edit-button
    margin auto
    margin-bottom 20px
</style>
