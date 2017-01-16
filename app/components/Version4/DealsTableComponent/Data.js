import FieldsCellRenderer from './FieldsCellRenderer';

export default class Data {}

Data.COLUMNS = [
  {
    headerName: '',
    field: 'label',
    pinned: true,
    suppressMovable: true,
    width: 200,
    cellClassRules: {
      'rag-title': (params) => params.data.type === 'section',
    },
    cellRenderer: (params) => `<span class="rag-element"> ${params.value} </span>`,
  },
  {
    headerName: 'Deal Limits',
    field: 'type',
    cellClass: 'main-deal',
    headerClass: 'main-deal',
    suppressMovable: true,
    cellRendererFramework: FieldsCellRenderer,
    width: 400,
    cellClassRules: {
      'rag-title': (params) => params.data.type === 'section',
    },
  },
  {
    headerName: 'Deal Sub-Limits',
    field: 'type2',
    suppressMovable: true,
    // cellRendererFramework: FieldsCellRenderer,
    width: 400,
    cellClassRules: {
      'rag-title': (params) => params.data.type === 'section',
    },
  },
  {
    headerName: 'Deal Sub-Limits 2',
    field: 'type3',
    suppressMovable: true,
    // cellRendererFramework: FieldsCellRenderer,
    width: 400,
    cellClassRules: {
      'rag-title': (params) => params.data.type === 'section',
    },
  },
  {
    headerName: 'Deal Sub-Limits 2',
    field: 'type4',
    suppressMovable: true,
    // cellRendererFramework: FieldsCellRenderer,
    width: 400,
    cellClassRules: {
      'rag-title': (params) => params.data.type === 'section',
    },
  },
];

Data.COLUMNSTOAPPEND = {
    headerName: 'Deal Sub-Limits 3',
    field: 'type',
    suppressMovable: true,
    cellRendererFramework: FieldsCellRenderer,
    width: 400,
    cellClassRules: {
      'rag-title': (params) => params.data.type === 'section',
    },
  },
  {
    headerName: 'Deal Sub-Limits 4',
    field: 'type',
    suppressMovable: true,
    cellRendererFramework: FieldsCellRenderer,
    width: 400,
    cellClassRules: {
      'rag-title': (params) => params.data.type === 'section',
    },
};

Data.ROWS = [
  {
    label: 'Status',
    type: 'select',
    component: 'field',
    colSize: 8,
  },

  {
    label: 'Pipeline ID',
    type: 'text',
    component: 'field',
    colSize: 6,
    optional: true,
  },
  {
    label: 'Degree of Confidence',
    type: 'select',
    component: 'field',
    colSize: 6,
  },
  {
    label: 'Termination date',
    type: 'date',
    component: 'field',
    colSize: 6,
  },
  {
    label: 'Exposure status',
    type: 'select',
    component: 'field',
    colSize: 8,
  },
  {
    label: 'Deal logged',
    type: 'toogleButton',
    component: 'field',
    colSize: 12,
  },
  {
    label: 'Limits',
    type: 'section',
    colSize: 12,
  },
  {
    label: '',
    type: 'limits',
    colSize: 12,
  },
  {
    label: 'Products',
    type: 'section',
    colSize: 12,
  },
  {
    label: '',
    type: 'products',
    colSize: 12,
  },
  {
    label: 'Counterparties',
    type: 'section',
    colSize: 12,
  },
  {
    label: '',
    type: 'counterparties',
    colSize: 12,
  },
  {
    label: 'Booking',
    type: 'section',
    colSize: 12,
  },
  {
    label: '',
    type: 'booking',
    colSize: 12,
  },
  {
    label: 'Collateral',
    type: 'section',
    colSize: 12,
  },
  {
    label: '',
    type: 'collateral',
    colSize: 12,
  },
  {
    label: 'DE-Risking',
    type: 'section',
    colSize: 12,
  },
  {
    label: '',
    type: 'de-risking',
    colSize: 12,
  },
];
