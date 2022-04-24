import { ResourceNotFoundError } from "../../../../shared/errors/resourceNotFound.error";
import { IDynamicTableFind } from "../../table/find/IRepository";
import { TableRow } from "../../shared/Table/dynamicTable";
import { IDynamicTableCreateRow } from "./IRepository";



export class DynamicTablesCreateRow {

    constructor(
        private findTable: IDynamicTableFind,
        private repository: IDynamicTableCreateRow
        ){}

    async handle(idTable : number,row: TableRow) {
        const table = await this.findTable.byId(idTable);
        if (table == undefined) throw new ResourceNotFoundError(`There is no table with id ${idTable}`)
        table.addRow(row)
        await this.repository.handle(row)
    }

}