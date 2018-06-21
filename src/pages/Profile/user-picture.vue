<template lang="pug">
  div#user-picture.column.items-center
    div.user-picture
      div.user-circle.column.items-center.justify-center
        img(:src='gravatarUrl').gravatar
    span.q-mt-sm {{ user.cpf }}
</template>

<script>
import md5 from 'md5';

export default {
  name: 'user-picture',
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
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    gravatarUrl() {
      const email = this.user.email.toLocaleLowerCase().trim();
      const hash = md5(email);
      return `https://www.gravatar.com/avatar/${hash}`;
    },
  },
  methods: {
  },
};
</script>

<style lang='stylus' scoped>
  @import '~variables'
  .gravatar
    border-radius 50%
    margin 2px
  .user-circle
    border-radius 50%
    border 1.7px solid $primary
</style>
