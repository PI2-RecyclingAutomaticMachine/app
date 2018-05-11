<template lang="pug">
  div#user-info.column.items-center
    user-picture(:user='user').q-mb-xl
    div(v-for='(label, index) in labelProfile' :key='index'
      ).label-profile.column.justify-center.items-center
      span.label.q-mb-xs {{ label.label }}
      span.value.q-mb-md {{ label.value }}
</template>

<script>
import UserPicture from './user-picture';

export default {
  name: 'user-info',
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
    return {};
  },
  computed: {
    labelProfile() {
      return [
        {
          label: 'Nome',
          value: this.user.name,
        },
        {
          label: 'Email',
          value: this.user.email,
        },
      ];
    },
  },
  methods: {
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
    border-bottom 1px solid $light
    padding-bottom 7px
  .label-profile
    width 100%
</style>
