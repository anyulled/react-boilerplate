import RefData from './RefData';

export default class RowDataFactory {

  createRowData() {
    const rowData = [];

    for (let i = 0; i < RefData.LABELS.length; i += 1) {
      switch (Object.keys(RefData.LABELS[i])[0]) {
        case 'main':
          for (let j = 0; j < RefData.LABELS[i].main.length; j += 1) {
            rowData.push({
              label: {
                text: RefData.LABELS[i].main[j].text,
              },
              deal_limits: {
                element: RefData.DEAL_LIMITS[i].main[j].element,
                colSize: RefData.DEAL_LIMITS[i].main[j].colSize,
                optional: RefData.DEAL_LIMITS[i].main[j].optional,
                buttonsValues: RefData.DEAL_LIMITS[i].main[j].buttonsValues,
              },
              deal_sublimits: {
                element: RefData.DEAL_SUBLIMITS[i].main[j].element,
                colSize: RefData.DEAL_SUBLIMITS[i].main[j].colSize,
                optional: RefData.DEAL_SUBLIMITS[i].main[j].optional,
                buttonsValues: RefData.DEAL_LIMITS[i].main[j].buttonsValues,
              },
            });
          }
          break;
        case 'limits':
          for (let j = 0; j < RefData.LABELS[i].limits.length; j += 1) {
            rowData.push({
              label: {
                text: RefData.LABELS[i].limits[j].text,
                type: RefData.LABELS[i].limits[j].type,
              },
              deal_limits: {
                element: RefData.DEAL_LIMITS[i].limits[j].element,
                type: RefData.DEAL_LIMITS[i].limits[j].type,
                colSize: RefData.DEAL_LIMITS[i].limits[j].colSize,
                value: RefData.DEAL_LIMITS[i].limits[j].value,
                buttonsValues: RefData.DEAL_LIMITS[i].limits[j].buttonsValues,
                currencies: RefData.DEAL_LIMITS[i].limits[j].currencies,
                optional: RefData.DEAL_LIMITS[i].limits[j].optional,
              },
              deal_sublimits: {
                element: RefData.DEAL_SUBLIMITS[i].limits[j].element,
                type: RefData.DEAL_SUBLIMITS[i].limits[j].type,
                colSize: RefData.DEAL_SUBLIMITS[i].limits[j].colSize,
                value: RefData.DEAL_SUBLIMITS[i].limits[j].value,
                buttonsValues: RefData.DEAL_SUBLIMITS[i].limits[j].buttonsValues,
                currencies: RefData.DEAL_SUBLIMITS[i].limits[j].currencies,
                optional: RefData.DEAL_SUBLIMITS[i].limits[j].optional,
              },
            });
          }
          break;
        case 'products':
          for (let j = 0; j < RefData.LABELS[i].products.length; j += 1) {
            rowData.push({
              label: {
                text: RefData.LABELS[i].products[j].text,
                type: RefData.LABELS[i].products[j].type,
              },
              deal_limits: {
                element: RefData.DEAL_LIMITS[i].products[j].element,
                type: RefData.DEAL_LIMITS[i].products[j].type,
                productsAdded: RefData.DEAL_LIMITS[i].products[j].productsAdded,
              },
              deal_sublimits: {
                element: RefData.DEAL_SUBLIMITS[i].products[j].element,
                type: RefData.DEAL_SUBLIMITS[i].products[j].type,
                productsAdded: RefData.DEAL_SUBLIMITS[i].products[j].productsAdded,
              },
            });
          }
          break;
        case 'counterparties':
          for (let j = 0; j < RefData.LABELS[i].counterparties.length; j += 1) {
            rowData.push({
              label: {
                text: RefData.LABELS[i].counterparties[j].text,
                type: RefData.LABELS[i].counterparties[j].type,
              },
              deal_limits: {
                element: RefData.DEAL_LIMITS[i].counterparties[j].element,
                type: RefData.DEAL_LIMITS[i].counterparties[j].type,
                counterpartyAdded: RefData.DEAL_LIMITS[i].counterparties[j].counterpartyAdded,
              },
              deal_sublimits: {
                element: RefData.DEAL_SUBLIMITS[i].counterparties[j].element,
                type: RefData.DEAL_SUBLIMITS[i].counterparties[j].type,
                counterpartyAdded: RefData.DEAL_SUBLIMITS[i].counterparties[j].counterpartyAdded,
              },
            });
          }
          break;
        case 'booking':
          for (let j = 0; j < RefData.LABELS[i].booking.length; j += 1) {
            rowData.push({
              label: {
                text: RefData.LABELS[i].booking[j].text,
                type: RefData.LABELS[i].booking[j].type,
              },
              deal_limits: {
                element: RefData.DEAL_LIMITS[i].booking[j].element,
                type: RefData.DEAL_LIMITS[i].booking[j].type,
              },
              deal_sublimits: {
                element: RefData.DEAL_SUBLIMITS[i].booking[j].element,
                type: RefData.DEAL_SUBLIMITS[i].booking[j].type,
              },
            });
          }
          break;
        case 'collateral':
          for (let j = 0; j < RefData.LABELS[i].collateral.length; j += 1) {
            rowData.push({
              label: {
                text: RefData.LABELS[i].collateral[j].text,
                type: RefData.LABELS[i].collateral[j].type,
              },
              deal_limits: {
                element: RefData.DEAL_LIMITS[i].collateral[j].element,
                type: RefData.DEAL_LIMITS[i].collateral[j].type,
              },
              deal_sublimits: {
                element: RefData.DEAL_SUBLIMITS[i].collateral[j].element,
                type: RefData.DEAL_SUBLIMITS[i].collateral[j].type,
              },
            });
          }
          break;
        case 'derisking':
          for (let j = 0; j < RefData.LABELS[i].derisking.length; j += 1) {
            rowData.push({
              label: {
                text: RefData.LABELS[i].derisking[j].text,
                type: RefData.LABELS[i].derisking[j].type,
              },
              deal_limits: {
                element: RefData.DEAL_LIMITS[i].derisking[j].element,
                type: RefData.DEAL_LIMITS[i].derisking[j].type,
              },
              deal_sublimits: {
                element: RefData.DEAL_SUBLIMITS[i].derisking[j].element,
                type: RefData.DEAL_SUBLIMITS[i].derisking[j].type,
              },
            });
          }
          break;
        default:
          break;
      }
    }
    return rowData;
  }
}
