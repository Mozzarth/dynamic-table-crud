import { Table } from "../../shared/Table/dynamicTable";


export interface IDynamicTableFind {
    byId(id : number): Promise<Table | undefined>
    all(): Promise<Table[]>
}