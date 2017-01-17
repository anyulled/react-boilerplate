import RefData from './RefData';

export default class RowDataFactory {

  createRowData() {
    const rowData = [];

    for (let i = 0; i < RefData.LABELS.length; i += 1) {
      // console.log(RefData.DEAL_LIMITS[i].productsAdded);
      rowData.push({
        label: {
          text: RefData.LABELS[i].text,
          type: RefData.LABELS[i].type,
        },
        deal_limits: {
          element: RefData.DEAL_LIMITS[i].element,
          colSize: RefData.DEAL_LIMITS[i].colSize,
          optional: RefData.DEAL_LIMITS[i].optional,
          productsAdded: RefData.DEAL_LIMITS[i].productsAdded,
          counterpartyAdded: RefData.DEAL_LIMITS[i].counterpartyAdded,
        },
        deal_sublimits: {
          element: RefData.DEAL_SUBLIMITS[i].element,
          colSize: RefData.DEAL_SUBLIMITS[i].colSize,
          optional: RefData.DEAL_SUBLIMITS[i].optional,
          productsAdded: RefData.DEAL_SUBLIMITS[i].productsAdded,
          counterpartyAdded: RefData.DEAL_SUBLIMITS[i].counterpartyAdded,
        },
      });
    }
    return rowData;
  }
}
