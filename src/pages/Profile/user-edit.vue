<template lang="pug">
  div#user-edit.column.items-center
    user-picture(:user='user').q-mb-xl
    div(v-for='(label, index) in labelProfile' :key='index'
      ).label-profile.column.justify-center.items-center
      span.label.q-mb-xs {{ label.label }}
      q-input(v-model='form[`${label.value}`]' @input='$emit("edition", form)').value.q-mb-md
</template>

<script>
import UserPicture from './user-picture';

export default {
  name: 'user-edit',
  components: {
    UserPicture,
  },
  async beforeRouteEnter(to, from, next) {
    try {
      next();
    } catch (err) {
      this.$log.error(err);
    }
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
      },
    };
  },
  computed: {
    labelProfile() {
      return [
        {
          label: 'Nome',
          value: 'name',
        },
        {
          label: 'Email',
          value: 'email',
        },
      ];
    },
  },
  methods: {
  },
  mounted() {
    this.form = this.user;
    this.$emit('edition', this.form);
  },
};
</script>

<style lang='stylus' scoped>
  @import '~variables'
  .label
    font-size 12px;
  .value
    width 100%
    text-align center
    color $grey-8
  .label-profile
    width 100%
</style>
