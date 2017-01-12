/**
*
* DealsTableComponent
*
*/

import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import Data from './Data';

class DealsTableComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      columnDefs: Data.COLUMNS,
      rowData: Data.ROWS,
    };

    this.gridOptions = {
      // this is how you listen for events using gridOptions
      onModelUpdated: () => {
        console.log('event onModelUpdated received');
      },

      getRowHeight: (params) => {
        switch (params.data.type) {
          case 'section':
            return 60;
          case 'products':
            return 270;
          case 'counterparties':
            return 540;
          default:
            return 38;
        }
      },

      headerCellRenderer: (params) => {
        const eHeader = document.createElement('span');

        eHeader.innerHTML =
          `<div> ${params.colDef.headerName}` +
          ' <span id="pinn" class="glyphicon glyphicon-pushpin"></span>' +
          ' <span id="unpinn" class="glyphicon glyphicon-new-window"></span>' +
          '</div>';

        const pinnButton = eHeader.querySelector('#pinn');
        const unpinnButton = eHeader.querySelector('#unpinn');

        pinnButton.addEventListener('click', () => {
          this.columnApi.setColumnPinned(params.colDef.field, 'left');
        });

        unpinnButton.addEventListener('click', () => {
          this.columnApi.setColumnPinned(params.colDef.field, null);
        });
        return eHeader;
      },
    };
  }

  onGridReady(params) {
    this.columnApi = params.columnApi;
    this.api = params.api;
  }

  onRefreshData() {
    console.log('refresh');
  }

  render() {
    const gridTemplate = (
      <div style={{ height: '100%', width: '100%' }}>
        <AgGridReact
          gridOptions={this.gridOptions}
          onGridReady={this.onGridReady.bind(this)}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          headerHeight={40}
        />
      </div>
    );

    return (
      <div style={{ width: '100%' }}>
        {gridTemplate}
      </div>
    );
  }
}

export default DealsTableComponent;
