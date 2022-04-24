import { IDynamicTableDeleteRow } from "./IRepository";



export class DynamicTablesDeleteRow {

    constructor(private repo: IDynamicTableDeleteRow) { }

    async byIdRow(id: number) {
        await this.repo.byId(id)
    }

}