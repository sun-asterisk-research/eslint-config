module.exports = {
    extends: [
        'plugin:vue/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, {
            'baseIndent': 1,
            'switchCase': 1
        }],
        'vue/max-attributes-per-line': ['warn', {
            'singleline': 3
        }],
        'vue/require-default-prop': 'off'
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            },
        },
    ],
};
