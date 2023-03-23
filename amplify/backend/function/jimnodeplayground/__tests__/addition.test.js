const { describe, expect, it } = require('@jest/globals');
const { handler } = require('../src');

describe('Addition', () => {
  const testName = 'addition';
  const testEvent = require(`./${testName}.json`);

  it('should compute for sum of two numbers', async () => {
    const result = await handler(testEvent);
    console.log('Lambda: ', result);

    const { num1, num2 } = testEvent.arguments;
    expect(result).toBe(3);
  });
});
