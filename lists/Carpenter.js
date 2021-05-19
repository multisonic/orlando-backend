const { Text, Relationship, Virtual } = require('@keystonejs/fields');

const carpenterFields = {
  fields: {
    firstName: {
      type: Text,
      isRequired: true,
    },
    lastName: {
      type: Text,
      isRequired: true,
    },
    name: {
      type: Virtual,
      resolver: (item) => `${item.firstName} ${item.lastName}`,
    },
    snags: {
      type: Relationship,
      ref: 'Snag.carpenter',
      isRequired: false,
      many: true,
    },
  },
  labelResolver: (item) => `${item.firstName} ${item.lastName}`,
};

module.exports = carpenterFields;
