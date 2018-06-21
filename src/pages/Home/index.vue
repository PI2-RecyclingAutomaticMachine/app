<template lang="pug">
q-page#home
  current-points(:userName='user.name' :points='points')
  div.column.justify-center.items-center
    span.message.text-center.q-mx-md
      | Apresente esse código de barras na máquina para inserir garrafas e coletar pontos
    q-card(color='white').q-mt-md
      q-card-main
        qriously(:value='String(user.cpf)' :size='250')
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import CurrentPoints from '../../components/CurrentPoints';

export default {
  name: 'home',
  components: {
    CurrentPoints,
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
    };
  },
  computed: {
    ...mapGetters([
      'user',
      'points',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchOperations',
    ]),
  },
  mounted() {
    this.cpf = this.user.cpf;
    this.fetchOperations();
  },
};
</script>

<style lang='stylus' scoped>
#home
  display grid
  grid-template-rows 1.5fr 8.5fr
  .message
    color #7D8597
</style>
