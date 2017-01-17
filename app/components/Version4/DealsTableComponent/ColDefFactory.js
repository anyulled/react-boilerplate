import LabelCellRenderer from './LabelCellRenderer';
import DealLimitsCellRenderer from './DealLimitsCellRenderer';

export default class ColDefFactory {}

ColDefFactory.HEADER = [
  {
    headerName: '',
    field: 'label',
    pinned: true,
    suppressMovable: true,
    width: 200,
    cellRendererFramework: LabelCellRenderer,
    cellClassRules: {
      'rag-title': (params) => params.data.label.type === 'section',
    },
  },
  {
    headerName: 'Deal Limits',
    field: 'deal_limits',
    cellClass: 'main-deal',
    headerClass: 'main-deal',
    suppressMovable: true,
    cellRendererFramework: DealLimitsCellRenderer,
    cellClassRules: {
      'rag-title': (params) => params.data.deal_limits.element === '',
    },
    width: 400,
  },
];

ColDefFactory.COLUMNSTOAPPEND = {
  headerName: 'Deal Sub-Limits',
  field: 'deal_sublimits',
  suppressMovable: true,
  cellRendererFramework: DealLimitsCellRenderer,
  cellClassRules: {
    'rag-title': (params) => params.data.deal_limits.element === '',
  },
  width: 400,
};
