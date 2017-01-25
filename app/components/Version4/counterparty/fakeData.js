export default {
  RadioGroupAddDeal: {
    title: 'Choose how to add the selected counterparties to the deal:',
    options: [
      { value: 'No additional restrictions', description: 'All the selected counterparties will be added in the same deal limit.' },
      { value: 'Create new sub-limit for all marked counterparties', description: 'All counterparties will be added and the marked will be included in a new sub-limit.' },
      { value: 'Create individual sub-limits for each marked counterparties', description: 'All counterparties will be added and the marked will be included in an individual sub-limit.' },
    ],
  },

  CounterpartyDetail: {
    general: [
      { label: 'CRM Responsible', value: 'Peter Mustermann' },
      { label: 'Credit rating', value: 'iA', colSize: 5 },
      { label: 'Score card', value: '1101', colSize: 7 },
      { label: 'Counterparty type', value: 'CORPORATE' },
      { label: 'Country of domicile', value: 'GERMANY' },
      { label: 'Industry sector (NACE)', value: 'Industry description' },
    ],
    legalEntity: [
      { label: 'Paragon ID', value: '1234567890', colSize: 5 },
      { label: 'Name', value: 'SIEMENS AKTIENGESELLSCHAFT', colSize: 7 },
    ],
    parent: [
      { label: 'Paragon ID', value: '1234567890', colSize: 5 },
      { label: 'Name', value: 'SIEMENS AKTIENGESELLSCHAFT', colSize: 7 },
      { label: 'Credit rating', value: 'iA' },
    ],
  },
};
