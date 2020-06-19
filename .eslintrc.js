module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'vue/html-self-closing': 'off',
    'nuxt/no-timing-in-fetch-data': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-mixed-spaces-and-tabs': [0],
    'no-tabs': 0,
    skipBlankLines: 0,
    ignoreComments: 0,
    'no-trailing-spaces': [2, { skipBlankLines: true }]
  }
}
