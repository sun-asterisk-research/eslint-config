const { rules, overrides  } = require('@sunasteriskrnd/eslint-config-vue');

module.exports = {
    extends: [
        'plugin:vue/vue3-recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules,
    overrides,
};
