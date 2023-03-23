const { promiseFunction } = require('./promise');
const { additionFunction } = require('./addition');

exports.handler = function mainHandler(event) {
  console.log(`EVENT : ${event.type}`);
  switch (event.type) {
    case 'Promise':
      return promiseFunction(event.arguments);
    case 'Addition':
      return additionFunction(event.arguments);
  }
};
