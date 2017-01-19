/**
*
* DealsTableComponent
*
*/

import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Button } from 'react-bootstrap';

import RowDataFactory from './RowDataFactory';
import ColDefFactory from './ColDefFactory';

class DealsTableComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      columnDefs: ColDefFactory.HEADER,
      rowData: new RowDataFactory().createRowData(),
    };

    this.gridOptions = {
      onModelUpdated: () => {
        console.log('event onModelUpdated received');
      },

      getRowHeight: (params) => {
        // console.log('type', params.data.label.type);
        switch (params.data.label.type) {
          case 'section':
            return 60;
          case 'productsComponent':
            return 270;
          case 'counterpartiesComponent':
            return 540;
          case 'radio3Component':
            return 120;
          case 'radio2Component':
            return 100;
          case 'allowedCurrenciesComponent':
            return 205;
          case 'amortisationDateComponent':
            return 120;
          default:
            return 38;
        }
      },

      headerCellRenderer: (params) => {
        const eHeader = document.createElement('span');

        eHeader.innerHTML =
          `<div> ${params.colDef.headerName}` +
          ' <span id="pin" class="glyphicon glyphicon-pushpin"></span>' +
          ' <span id="unpin" class="glyphicon glyphicon-new-window"></span>' +
          '</div>';

        const pinButton = eHeader.querySelector('#pin');
        const unpinButton = eHeader.querySelector('#unpin');

        pinButton.addEventListener('click', () => {
          this.columnApi.setColumnPinned(params.colDef.field, 'left');
          params.colDef.pinned = true; // eslint-disable-line no-param-reassign
        });

        unpinButton.addEventListener('click', () => {
          this.columnApi.setColumnPinned(params.colDef.field, null);
          params.colDef.pinned = false; // eslint-disable-line no-param-reassign
        });

        return eHeader;
      },

      setNewColumns: () => {
        const data = ColDefFactory.COLUMNSTOAPPEND;
        const columnDefs = this.gridOptions.columnDefs;
        columnDefs.push(data);
        this.api.setColumnDefs(columnDefs);
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
        <Button className="add-column" onClick={this.gridOptions.setNewColumns.bind()}>
          Add Column
        </Button>
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