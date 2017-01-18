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
      { text: '', type: 'limitsComponent' },
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
      { element: 'text', colSize: 6, optional: true },
      { element: 'select', colSize: 6 },
      { element: 'date', colSize: 6 },
      { element: 'select', colSize: 8 },
      { element: 'toogleButton', colSize: 12 },
    ],
  },
  {
    limits: [
      { element: '', type: 'section' },
      { element: 'limitsComponent', type: '' },
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
      { element: 'bookingComponent', type: '' },
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
      { element: 'text', colSize: 6, optional: true },
      { element: 'select', colSize: 6 },
      { element: 'date', colSize: 6 },
      { element: 'select', colSize: 8 },
      { element: 'toogleButton', colSize: 12 },
    ],
  },
  {
    limits: [
      { element: '', type: 'section' },
      { element: 'limitsComponent', type: '' },
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
      { element: 'bookingComponent', type: '' },
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
