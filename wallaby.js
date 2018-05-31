module.exports = function() {
  return {
    files: ['src/**/*.ts', 'tsconfig.json', '!src/**/*.spec.ts'],

    tests: ['src/**/*.spec.ts'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};
