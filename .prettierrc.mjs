/** @type {import('prettier').Config} */
const config = {
  endOfLine: 'auto',
  bracketSameLine: true,
  singleQuote: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default config;
