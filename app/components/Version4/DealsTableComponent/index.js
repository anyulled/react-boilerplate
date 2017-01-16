/**
*
* DealsTableComponent
*
*/

import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Button } from 'react-bootstrap';

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

      onColumnPinned: () => {
        // console.log('params', params);
        // console.log('this', this.api.columnController.displayedCentreHeaderRows[0][0].colDef);
        // console.log('this', this);
        const centerColumns = this.api.columnController.displayedCenterColumns;
        const LeftColumns = this.api.columnController.displayedLeftColumns;
        if (centerColumns.length > 0) {
          for (let i = 0; i < centerColumns.length; i += 1) {
            if (centerColumns[i].left === 0) {
              centerColumns[i].colDef.cellStyle = { 'background-color': '#fafafb' };
            } else if ((centerColumns[i].left / 400) % 2 === 0) {
              centerColumns[i].colDef.cellStyle = { 'background-color': '#f1f5f8' };
            } else {
              centerColumns[i].colDef.cellStyle = { 'background-color': '#fff' };
            }
          }

          for (let i = 0; i < LeftColumns.length; i += 1) {
            if (LeftColumns[i].left === 0) {
              LeftColumns[i].colDef.cellStyle = { 'background-color': '#f1f5f8' };
            } else if (LeftColumns[i].left === 200) {
              LeftColumns[i].colDef.cellStyle = { 'background-color': '#fff' };
            } else {
              if (((LeftColumns[i].left - 200) / 400) % 2 === 0) {
                LeftColumns[i].colDef.cellStyle = { 'background-color': '#fff' };
              } else {
                LeftColumns[i].colDef.cellStyle = { 'background-color': '#f1f5f8' };
              }
            }
          }

          this.api.refreshView();
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
          params.colDef.pinned = true;
          //this.api.refreshView();
        });

        unpinButton.addEventListener('click', () => {
          this.columnApi.setColumnPinned(params.colDef.field, null);
          params.colDef.pinned = false;
          //this.api.refreshView();
        });
        return eHeader;
      },
      setNewColumns: (params) => {
        var data = Data.COLUMNSTOAPPEND;
        var columnDefs = this.gridOptions.columnDefs;
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