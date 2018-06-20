import _ from 'lodash';

const getPoints = (operation) => {
  const { registers } = operation;
  return _.sumBy(registers, (r) => {
    const pointsPerMaterial = r.bottle.material === 'plastico' ? 1 : 2;
    return r.count * pointsPerMaterial;
  });
};

export const operations = state => state.operations.map(((o) => {
  o.points = getPoints(o);
  return o;
})).sort((a, b) => new Date(b.date) - new Date(a.date));

export const points = (state) => {
  let sum = 0;
  state.operations.forEach((o) => {
    sum += getPoints(o);
  });
  return sum;
};

export const weight = (state) => {
  const weights = state.operations.map(o =>
    _.sumBy(o.registers, r => r.count * r.bottle.weight));

  return _.sum(weights);
};

export const plasticWeight = (state) => {
  const weights = state.operations.map((o) => {
    const plasticBottles = o.registers.filter(r => r.bottle.material === 'plastico');
    return _.sumBy(plasticBottles, r => r.count * r.bottle.weight);
  });

  return _.sum(weights);
};

export const glassWeight = (state) => {
  const weights = state.operations.map((o) => {
    const glassBottles = o.registers.filter(r => r.bottle.material === 'vidro');
    return _.sumBy(glassBottles, r => r.count * r.bottle.weight);
  });

  return _.sum(weights);
};

export const groupedBottles = (state) => {
  const registerBottles = state.operations
    .map(o => o.registers.map(r => _.fill(Array(r.count), r.bottle)));

  let bottles = _.concat(...registerBottles);
  bottles = _.concat(...bottles);

  return _.groupBy(bottles, 'label');
};
