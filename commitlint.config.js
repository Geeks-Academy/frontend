const PREFIX = 'FRDQ';

const customParser = {
  parserOpts: {
    headerPattern: /^(\w+)-(\d+) - (.*)$/,
    headerCorrespondence: ['type', 'id', 'subject'],
  },
};

module.exports = {
  parserPreset: customParser,
  rules: {
    'type-enum': [2, 'always', [`FRDQ`]],
    'commit-message-rule': [2, 'always'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'sentence-case'],
  },
  plugins: [
    {
      rules: {
        'commit-message-rule': ({ type, id }) => {
          const ID = parseInt(id, 10);

          return [
            !isNaN(ID) && type.includes(`${PREFIX}`),
            `\x1b[31m Your commit message should contain PREFIX: ${PREFIX}, ID as a number, and SUBJECT. \r\n     Example:\x1b[34m "FRDQ-21 - Your commit message" \x1b[0m \x1b[0m`,
          ];
        },
      },
    },
  ],
};
