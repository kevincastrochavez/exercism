// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;

    default:
      return 2.5;
  }
}

// console.log(timeToMixJuice('Berries & Lime'));

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
function limesToCut(wedgesNeeded, limes) {
  let counter = 0;
  let totalWedges = 0;

  while (totalWedges < wedgesNeeded) {
    let wedges;

    const limeItem = limes.shift();

    switch (limeItem) {
      case 'small':
        wedges = 6;
        break;
      case 'medium':
        wedges = 8;
        break;
      case 'large':
        wedges = 10;
        break;
      default:
        break;
    }

    for (let index = 0; index < wedges; index++) {
      if (totalWedges < wedgesNeeded) totalWedges++;
    }

    counter++;
    console.log(totalWedges);
  }

  return counter;
}

console.log(
  limesToCut(42, [
    'small',
    'large',
    'large',
    'medium',
    'small',
    'large',
    'large',
    'medium',
  ])
);
// console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
function remainingOrders(timeLeft, orders) {
  let drink = 0;

  while (drink < timeLeft) {
    const nextDrink = orders.shift();

    switch (nextDrink) {
      case 'Pure Strawberry Joy':
        drink += 0.5;
        break;
      case 'Energizer':
        drink += 1.5;
        break;
      case 'Green Garden':
        drink += 1.5;
        break;
      case 'Tropical Island':
        drink += 3;
        break;
      case 'All or Nothing':
        drink += 5;
        break;
      default:
        drink += 2.5;
        break;
    }
  }

  return orders;
}

// console.log(
//   remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden'])
// );
