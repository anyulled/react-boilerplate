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
      quickFilterText: null,
      showGrid: true,
      showToolPanel: false,
      columnDefs: Data.COLUMNS,
      rowData: Data.ROWS,
    };

    this.gridOptions = {
      // this is how you listen for events using gridOptions
      onModelUpdated: () => {
        console.log('event onModelUpdated received');
      },

      getRowHeight: (params) => {
        console.log('params', params.data.type);
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

      getRows: (params) => {
        console.log('getRows ', params);
      },
      setNewColumns: (params) => {
        var data = Data.COLUMNSTOAPPEND;
        var columnDefs = this.gridOptions.columnDefs;
        var newColumnDefs = columnDefs.push(data);
        this.api.setColumnDefs(columnDefs);
      },
    };
  }

  onShowGrid(show) {
    this.setState({
      showGrid: show,
    });
  }

  onGridReady(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
  }

  onRefreshData() {
    console.log('refresh');
  }

  selectAll() {
    this.api.selectAll();
  }

  deselectAll() {
    this.api.deselectAll();
  }

  render() {
    let gridTemplate;
    if (this.state.showGrid) {
      gridTemplate = (
        <div style={{ height: '100%', width: '100%' }}>
          <AgGridReact
            gridOptions={this.gridOptions}
            // listening for events
            onGridReady={this.onGridReady.bind(this)}
            //onGridReady={() => this.onGridReady(this)}
            // binding to array properties
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            // rowHeight="33"
            headerHeight={40}
          />
           <Button onClick={this.gridOptions.setNewColumns.bind()}>
            Add Column
          </Button>
        </div>
      );
    }

    return (
      <div style={{ width: '100%' }}>
        {gridTemplate}
      </div>
    );
  }
}

export default DealsTableComponent;
