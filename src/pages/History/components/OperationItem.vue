<template lang="pug">
q-collapsible(
  group='operation'
  :label='label'
  :sublabel='date'
  icon='check_circle'
  )#operation-item
  div.operation-info.q-pa-md
    span.text-weight-bold {{ bottleLabel }}
    div.bottles.column.q-mt-sm
      span(
        v-for='(register, index) in operation.registers'
        :key='index'
        ) {{ register.count }} unidade(s) de {{ register.bottle.label }}
        | ({{ register.bottle.weight }}g)
    div.q-mt-sm.column
      span {{ plasticBottleWeightLabel }}
      span {{ glassBottleWeightLabel }}
</template>

<script>
import moment from 'moment';
import _ from 'lodash';

export default {
  name: 'operation-item',
  components: {
  },
  props: {
    operation: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    label() {
      const { points } = this.operation;
      return `Você ganhou ${points} ponto${points !== 1 ? 's' : ''}`;
    },
    date() {
      return moment(this.operation.date).format('lll');
    },
    bottleCount() {
      const { registers } = this.operation;
      return _.sumBy(registers, r => r.count);
    },
    bottleLabel() {
      return `${this.bottleCount}
        Garrafa${this.bottleCount !== 1 ? 's' : ''}
        inseridas:`;
    },
    plasticBottleWeight() {
      const { registers } = this.operation;
      const plasticBottles = registers.filter(r => r.bottle.material === 'plastico');
      return _.sumBy(plasticBottles, r => r.count * r.bottle.weight);
    },
    plasticBottleWeightLabel() {
      return `${this.plasticBottleWeight}
        grama${this.plasticBottleWeight !== 1 ? 's' : ''}
        de plástico recicladas`;
    },
    glassBottleWeight() {
      const { registers } = this.operation;
      const glassBottles = registers.filter(r => r.bottle.material === 'vidro');
      return _.sumBy(glassBottles, r => r.count * r.bottle.weight);
    },
    glassBottleWeightLabel() {
      return `${this.glassBottleWeight}
        grama${this.glassBottleWeight !== 1 ? 's' : ''}
        de vidro recicladas`;
    },
  },
  methods: {
  },
};
</script>

<style lang="stylus">
@import '~variables'
#operation-item
  .q-icon
    color $secondary
  .q-item-main, .q-item-side-right
    margin 0
  .q-item-label
    font-size 0.95rem
</style>


<style lang='stylus' scoped>
@import '~variables'
#operation-item
  color #4b4b4b
  .operation-info
    background $secondary
</style>
