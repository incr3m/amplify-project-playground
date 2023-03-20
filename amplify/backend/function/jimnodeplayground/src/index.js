exports.handler = async event => {
  console.log(`EVENT1111: ${JSON.stringify(event)}`);
  const { num1, num2 } = event.arguments;
  return num1 + num2;
};
