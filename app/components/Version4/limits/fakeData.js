export default {
  commonCurrencies: [
    { id: '€ - EUR', description: '' },
    { id: '$ - USD', description: '' },
    { id: '₤ - GBP', description: '' },
  ],

  currencies: [
    { id: 'Abkhazia - ₽ - RUB', description: ' - Russian ruble' },
    { id: 'Afghanistan - AFN', description: ' - Afghan afghani' },
    { id: 'Albania - ALL', description: ' - Albanian lek' },
    { id: 'Algeria - DZD', description: ' - Algerian dinar' },
    { id: 'Angola - AOA', description: ' - Angolan kwanza' },
    { id: 'Anguilla - $ - XCD', description: ' - East Caribbean dollar' },
    { id: 'Argentina - $ - ARS', description: ' - Argentine peso' },
    { id: 'Armenia - AMD', description: ' - Armenian dram' },
    { id: 'Aruba - AWG', description: ' - Aruban florin' },
  ],

  RadioGroupAddDeal: {
    title: 'Choose how to add the selected currencies to the deal:',
    options: [
      { value: 'No additional restrictions', description: 'All the selected currencies will be added in the same deal limit.' },
      { value: 'Create new sub-limit for all marked currencies', description: 'All currencies will be added and the marked will be included in a new sub-limit.' },
      { value: 'Create individual sub-limits for each marked currencies', description: 'All currencies will be added and the marked will be included in an individual sub-limit.' },
    ],
  },
};
