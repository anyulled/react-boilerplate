export default {
  collateral_list: [
    { value1: '00.000.000,00 USD', value2: '00.000.000,00 €', share: '100%', description: 'Details or description of the added collateral, truncated as it ca' },
    { value1: '00.000.000,00 USD', value2: '00.000.000,00 €', share: '100%', description: 'Details or description of the added collateral, truncated as it ca' },
    { value1: '00.000.000,00 USD', value2: '00.000.000,00 €', share: '100%', description: 'Details or description of the added collateral, truncated as it ca' },
  ],

  RadioGroupAddDeal: {
    title: 'Choose how to add the selected collaterals to the deal:',
    options: [
      { value: 'No additional restrictions', description: 'All the selected collaterals will be added in the same deal limit.' },
      { value: 'Create new sub-limit for all marked collaterals', description: 'All collaterals will be added and the marked will be included in a new sub-limit.' },
      { value: 'Create individual sub-limits for each marked collaterals', description: 'All collaterals will be added and the marked will be included in an individual sub-limit.' },
    ],
  },
};
