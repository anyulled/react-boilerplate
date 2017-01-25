export default class RefData {}

RefData.LABELS = [
  {
    main: [
      { text: 'Status' },
      { text: 'Pipeline ID' },
      { text: 'Degree of Confidence' },
      { text: 'Termination date' },
      { text: 'Exposure status' },
      { text: 'Deal logged' },
    ],
  },
  {
    limits: [
      { text: 'Limits', type: 'section' },
      { text: 'Commitment type' },
      { text: 'Start expected' },
      { text: 'End expected' },
      { text: 'Termination notice period', type: 'radio3Component' },
      { text: 'Underlying transactions', type: 'radio2Component' },
      { text: 'Deal final maturity' },
      { text: 'Remaining tenor of the deal' },
      { text: 'Underlying transaction character' },
      { text: 'Next review date' },
      { text: '', type: 'splitLine' },
      { text: 'Deal currency' },
      { text: 'Allowed currencies', type: 'allowedCurrenciesComponent' },
      { text: '', type: 'splitLine' },
      { text: 'Notional amount prior de-risking' },
      { text: 'DB Public hold' },
      { text: 'Net limit' },
      { text: 'Maximum DB Net Hold' },
      { text: '' },
      { text: '', type: 'splitLine' },
      { text: 'Amortisation date', type: 'amortisationDateComponent' },
      { text: 'FSC Program ID' },
      { text: 'Facility ID (CRM System)' },
      { text: 'Facility LGD (CRM Facility)' },
      { text: 'Country of risk (CRM Facility)' },
    ],
  },
  {
    products: [
      { text: 'Products', type: 'section' },
      { text: '', type: 'productsComponent' },
    ],
  },
  {
    counterparties: [
      { text: 'Counterparties', type: 'section' },
      { text: '', type: 'counterpartiesComponent' },
    ],
  },
  {
    booking: [
      { text: 'Booking', type: 'section' },
      { text: '', type: 'bookingComponent' },
    ],
  },
  {
    collateral: [
      { text: 'Collateral', type: 'section' },
      { text: '', type: 'collateralComponent' },
    ],
  },
  {
    derisking: [
      { text: 'DE-Risking', type: 'section' },
      { text: '', type: 'deRiskingComponent' },
    ],
  },
];

RefData.DEAL_LIMITS = [
  {
    main: [
      { element: 'select', colSize: 8 },
      { element: 'text', colSize: 6, optional: '(optional)' },
      { element: 'select', colSize: 6 },
      { element: 'date', colSize: 6 },
      { element: 'select', colSize: 8 },
      {
        element: 'toogleButton',
        colSize: 12,
        buttonsValues: [
          { value: 'No' },
          { value: 'Yes', active: true },
        ],
      },
    ],
  },
  {
    limits: [
      { element: '', type: 'section' },
      { element: 'select', colSize: 6 },
      { element: 'date', colSize: 6 },
      { element: 'date', colSize: 6 },
      { element: 'radio3', colSize: 12 },
      { element: 'radio2', colSize: 12 },
      { element: 'readOnly', value: 'DD.MM.YYYY' },
      { element: 'readOnly', value: '1234 days' },
      {
        element: 'toogleButton',
        colSize: 12,
        buttonsValues: [
          { value: 'Single transaction' },
          { value: 'Multiple transactions' },
        ],
      },
      { element: 'date', colSize: 6 },
      { element: 'splitLine', colSize: 12 },
      { element: 'select', colSize: 6 },
      {
        element: 'allowedCurrenciesComponent',
        colSize: 12,
        currencies: [
          { id: '$ - USD' },
          { id: '€ - EUR' },
          { id: 'Argentina - $ - ARS' },
        ],
      },
      { element: 'splitLine', colSize: 12 },
      { element: 'amountText', colSize: 12 },
      { element: 'amountText', colSize: 12 },
      { element: 'amountText', colSize: 12 },
      {
        element: 'toogleButton',
        colSize: 12,
        buttonsValues: [
          { value: 'Amount' },
          { value: 'Share' },
        ],
      },
      { element: 'amountText', colSize: 12 },
      { element: 'splitLine', colSize: 12 },
      { element: 'amortisationDateComponent', colSize: 12 },
      { element: 'text', colSize: 6 },
      { element: 'text', colSize: 6 },
      { element: 'text', colSize: 3, optional: '%' },
      { element: 'select', colSize: 10 },
    ],
  },
  {
    products: [
      { element: '', type: 'section' },
      { element: 'productsComponent', type: '', productsAdded: false },
    ],
  },
  {
    counterparties: [
      { element: '', type: 'section' },
      { element: 'counterpartiesComponent', type: '', counterpartyAdded: true },
    ],
  },
  {
    booking: [
      { element: '', type: 'section' },
      {
        element: 'bookingComponent',
        type: '',
        colSize: 12,
        booking_list: [
          { title: 'Name of the entity truncated if it is too long', region: 'Region', systems: 5, facilities: 5, accounts: 5 },
          { title: 'Name of the entity truncated if it is too long', region: 'Region', systems: 5, facilities: 5, accounts: 5 },
          { title: 'Name of the entity truncated if it is too long', region: 'Region', systems: 5, facilities: 5, accounts: 5 },
        ],
      },
    ],
  },
  {
    collateral: [
      { element: '', type: 'section' },
      { element: 'collateralComponent', type: '' },
    ],
  },
  {
    derisking: [
      { element: '', type: 'section' },
      { element: 'deRiskingComponent', type: '' },
    ],
  },
];

RefData.DEAL_SUBLIMITS = [
  {
    main: [
      { element: 'select', colSize: 8 },
      { element: 'text', colSize: 6, optional: '(optional)' },
      { element: 'select', colSize: 6 },
      { element: 'date', colSize: 6 },
      { element: 'select', colSize: 8 },
      {
        element: 'toogleButton',
        colSize: 12,
        buttonsValues: [
          { value: 'No' },
          { value: 'Yes', active: true },
        ],
      },
    ],
  },
  {
    limits: [
      { element: '', type: 'section' },
      { element: 'select', colSize: 6 },
      { element: 'date', colSize: 6 },
      { element: 'date', colSize: 6 },
      { element: 'radio3', colSize: 12 },
      { element: 'radio2', colSize: 12 },
      { element: 'readOnly', value: 'DD.MM.YYYY' },
      { element: 'readOnly', value: '1234 days' },
      {
        element: 'toogleButton',
        colSize: 12,
        buttonsValues: [
          { value: 'Single transaction' },
          { value: 'Multiple transactions' },
        ],
      },
      { element: 'date', colSize: 6 },
      { element: 'splitLine', colSize: 12 },
      { element: 'select', colSize: 6 },
      {
        element: 'allowedCurrenciesComponent',
        colSize: 12,
        currencies: [
          { id: '$ - USD' },
          { id: '€ - EUR' },
          { id: 'Argentina - $ - ARS' },
        ],
      },
      { element: 'splitLine', colSize: 12 },
      { element: 'amountText', colSize: 12 },
      { element: 'amountText', colSize: 12 },
      { element: 'amountText', colSize: 12 },
      {
        element: 'toogleButton',
        colSize: 12,
        buttonsValues: [
          { value: 'Amount' },
          { value: 'Share' },
        ],
      },
      { element: 'amountText', colSize: 12 },
      { element: 'splitLine', colSize: 12 },
      { element: 'amortisationDateComponent', colSize: 12 },
      { element: 'text', colSize: 6 },
      { element: 'text', colSize: 6 },
      { element: 'text', colSize: 3, optional: '%' },
      { element: 'select', colSize: 10 },
    ],
  },
  {
    products: [
      { element: '', type: 'section' },
      { element: 'productsComponent', type: '', productsAdded: true },
    ],
  },
  {
    counterparties: [
      { element: '', type: 'section' },
      { element: 'counterpartiesComponent', type: '', counterpartyAdded: false },
    ],
  },
  {
    booking: [
      { element: '', type: 'section' },
      {
        element: 'bookingComponent',
        type: '',
        colSize: 12,
        booking_list: [],
      },
    ],
  },
  {
    collateral: [
      { element: '', type: 'section' },
      { element: 'collateralComponent', type: '' },
    ],
  },
  {
    derisking: [
      { element: '', type: 'section' },
      { element: 'deRiskingComponent', type: '' },
    ],
  },
];
