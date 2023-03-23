const { describe, expect, it } = require('@jest/globals');
const { handler } = require('../src');

describe('Promise', () => {
  const testName = 'promise';
  const testEvent = require(`./${testName}.json`);

  it('sample promise', async () => {
    await handler(testEvent);
  });
});
