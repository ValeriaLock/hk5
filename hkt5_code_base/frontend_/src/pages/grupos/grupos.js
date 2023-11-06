import React from 'react';
import DataGrid, { Column, ColumnChooser, ColumnFixing } from 'devextreme-react/data-grid';

class Grupos extends Component {
    render() {
        return (
            <DataGrid id="gridContainer">
                dataSource={this.grupos}
                keyExpr="ID"
                allowColumnReordering={true}
                allowColumnResizing={true}
                columnAutoWidth={true}
                showBorders={true}
                >
                <Column
                    caption="Id"
                    width={230}
                    fixed={true}
                    calculateCellValue={this.calculateCellValue}
                />
                <Column
                    dataField="Name"
                    dataType="string"
                />
            </DataGrid>
        );
    }
}

export default Grupos;