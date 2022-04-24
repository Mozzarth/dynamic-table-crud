import { TableRow } from "../../shared/Table/dynamicTable";



export interface IDynamicTableCreateRow {
    handle(row: TableRow) : Promise<void>
}