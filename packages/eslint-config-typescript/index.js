module.exports = {
    extends: [
        'airbnb-typescript/base'
    ],
    rules: {
        '@typescript-eslint/indent': ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            CallExpression: {
                arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false
        }],
        '@typescript-eslint/no-use-before-define': ['error', {
            functions: false,
        }],
    }
}
