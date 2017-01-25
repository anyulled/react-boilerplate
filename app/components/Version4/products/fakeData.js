export default {
  RadioGroupAddDeal: {
    title: 'Choose how to add the selected products to the deal:',
    options: [
      { value: 'No additional restrictions', description: 'All the selected products will be added in the same deal limit.' },
      { value: 'Create new sub-limit for all marked products', description: 'All products will be added and the marked will be included in a new sub-limit.' },
      { value: 'Create individual sub-limits for each marked products', description: 'All products will be added and the marked will be included in an individual sub-limit.' },
    ],
  },
  level1: {
    label: 'Level 1: Client product (Select one)',
    multiple: false,
    options: [
      { value: 'Documentary Trade & Services' },
      { value: 'Guarantees and Standby Letters of Cre' },
      { value: 'Trade Finance Loans' },
      { value: 'Structured Export Finance' },
      { value: 'Structured Commodity Trade Finance' },
      { value: 'Guarantees and Standby Letters of Cre' },
    ],
  },
  level2: {
    label: 'Level 2: Product (Select one)',
    multiple: false,
    options: [
      { value: 'Import LC' },
      { value: 'Export LC' },
      { value: 'LC Reimbursement' },
      { value: 'Documentary Collection' },
      { value: 'Document Management Services' },
      { value: 'Automated Trade Data Matching Service' },
    ],
  },
  level3: {
    label: 'Level 3: Sub-product (Select one or multiple)',
    multiple: true,
    options: [
      { value: 'Export LC Advising' },
      { value: 'Export LC Open Confirmation' },
      { value: 'Export LC Silent Confirmation' },
      { value: 'Export Letter of Transfer' },
      { value: 'Export LC Documents presentation without Discount' },
      { value: 'Export LC Sight Discounting Recourse' },
    ],
  },
};
