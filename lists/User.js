const { Text, Password, Checkbox } = require('@keystonejs/fields');

const userFields = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    email: {
      type: Text,
      isRequired: true,
    },
    password: {
      type: Password,
      isRequired: true,
    },
    isAdmin: {
      type: Checkbox,
      isRequired: true,
    },
  },
  labelResolver: (item) => `${item.name}`,
};

module.exports = userFields;
