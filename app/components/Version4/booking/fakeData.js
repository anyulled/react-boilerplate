export default {
  bookingEntities: [
    { name: 'Deutsche Bank AG', place: 'Frankfurt, GERMANY' },
    { name: 'Name of the entity truncated if it is too long ...', place: 'City, COUNTRY' },
    { name: 'Name of the entity truncated if it is too long ...', place: 'City, COUNTRY' },
    { name: 'Name of the entity truncated if it is too long ...', place: 'City, COUNTRY' },
    { name: 'Name of the entity truncated if it is too long ...', place: 'City, COUNTRY' },
  ],

  systems: [
    { id: 'Name of the booking system' },
    { id: 'Name of the booking system' },
    { id: 'Name of the booking system' },
    { id: 'Name of the booking system' },
    { id: 'Name of the booking system' },
    { id: 'Name of the booking system' },
    { id: 'Name of the booking system' },
    { id: 'Name of the booking system' },
  ],

  facilities: [
    { id: 'ID_1234567' },
    { id: 'ID_1234567' },
  ],

  accounts: [
    { id: 'ID_987654321' },
    { id: 'ID_987654321' },
  ],

  booking_list: [
    { title: 'Name of the entity truncated if it is too long', region: 'Region', systems: 5, facilities: 5, accounts: 5 },
    { title: 'Name of the entity truncated if it is too long', region: 'Region', systems: 5, facilities: 5, accounts: 5 },
    { title: 'Name of the entity truncated if it is too long', region: 'Region', systems: 5, facilities: 5, accounts: 5 },
  ],

  RadioGroupAddDeal: {
    title: 'Choose how to add the selected entities to the deal:',
    options: [
      { value: 'No additional restrictions', description: 'All the selected entities will be added in the same deal limit.' },
      { value: 'Create new sub-limit for all marked entities', description: 'All entities will be added and the marked will be included in a new sub-limit.' },
      { value: 'Create individual sub-limits for each marked entities', description: 'All entities will be added and the marked will be included in an individual sub-limit.' },
    ],
  },

  details: {
    entity: 'Deutsche Bank AG (Frankfurt, GERMANY)',
  },
};
