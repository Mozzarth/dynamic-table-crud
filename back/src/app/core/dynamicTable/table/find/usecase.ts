import { IDynamicTableFind } from "./IRepository";



export class DynamicTablesFind {

    constructor(private repo: IDynamicTableFind) {
    }

    async all() {
        const results = await this.repo.all()
        return results.map(r => r.toJson());
    }
    async byId(idTable : number){
        const result = await this.repo.byId(idTable);
        return result == undefined ? undefined : result.toJson()
    }

}

