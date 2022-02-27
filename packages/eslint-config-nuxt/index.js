module.exports = {
    extends: [
        'plugin:nuxt/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        'import/core-modules': ['vue', 'vuex', 'vue-router'],
    },
    overrides: [
        {
            files: ['pages/*.vue'],
            rules: {
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
};
