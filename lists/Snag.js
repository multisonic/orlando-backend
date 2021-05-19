const {
  Text,
  Checkbox,
  Relationship,
  CalendarDay,
} = require('@keystonejs/fields');

const snagFields = {
  fields: {
    date: {
      type: CalendarDay,
      dateFrom: '2011-02-24',
      isRequired: true,
    },
    performanceNumber: {
      type: Text,
      isRequired: true,
    },
    wasVisible: {
      type: Checkbox,
      isRequired: true,
    },
    carpenter: {
      type: Relationship,
      ref: 'Carpenter',
      isRequired: true,
      many: false,
    },
  },
};

module.exports = snagFields;
