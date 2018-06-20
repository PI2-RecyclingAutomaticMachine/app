<template lang="pug">
q-page#statistics
  div.row.items-center.justify-center.thank-you
    span.text-center.q-mr-sm Obrigado por reciclar
    q-icon(name='ion-leaf')
  div.column
    span.message.text-center Você já reciclou
    div.data
      weight-card(
        v-for='(item, index) in weightData'
        :key='index'
        :weight='item.weight'
        :label='item.label'
        ).q-ma-sm
      bottle-card(
        v-for='(label, index) in bottlesLabels'
        :key='`${label}-${index}`'
        :bottle='groupedBottles[label][0]'
        :count='groupedBottles[label].length'
        ).q-ma-sm
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import _ from 'lodash';

import WeightCard from './components/WeightCard';
import BottleCard from './components/BottleCard';

export default {
  name: 'statistics',
  components: {
    WeightCard,
    BottleCard,
  },
  props: {
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'weight',
      'plasticWeight',
      'glassWeight',
      'groupedBottles',
    ]),
    weightData() {
      return [
        { weight: this.weight, label: 'No total' },
        { weight: this.plasticWeight, label: 'De plástico' },
        { weight: this.glassWeight, label: 'De vidro' },
      ];
    },
    bottlesLabels() {
      const labels = _.keys(this.groupedBottles);
      return labels.sort((a, b) => (a < b ? -1 : 1));
    },
  },
  methods: {
    ...mapActions([
      'fetchOperations',
    ]),
  },
  mounted() {
    this.fetchOperations();
  },
};
</script>

<style lang='stylus' scoped>
@import '~variables'
#statistics
  display grid
  grid-template-rows 1fr 9fr
  .thank-you
    font-size 1.5rem
    color $secondary
  .message
    color #7D8597
  .data
    max-height 70vh
    overflow auto
</style>
