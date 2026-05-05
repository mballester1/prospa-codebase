module.exports = {
    root: true,
    extends: ['@react-native', 'plugin:storybook/recommended'],
    rules: {
        'react/react-in-jsx-scope': 'error',
        'react-native/no-inline-styles': 0,
        'react/no-unstable-nested-components': 0,
        '@typescript-eslint/consistent-type-imports': [
            'error',
            { fixStyle: 'inline-type-imports' },
        ],
    },
    env: {
        jest: true,
        'jest/globals': true,
        browser: true,
    },
    ignorePatterns: [
        'coverage/**/*.js',
        'src/generated/**/*.ts',
        'local_modules/*',
        'maestro/*',
        'android/*',
        '**/*.js',
    ],
};
