import { DynamicTablesFind } from "../../../../app/core/dynamicTable/table/find/usecase";
import { dynamicTablesFind } from "../../../../app/core/dynamicTable/table/find";
import { Request, Response, NextFunction } from "express";



class TableControlle {

    constructor(
        private findTable: DynamicTablesFind,

    ) { }

    async byId(req: Request, res: Response, next: NextFunction){
        try {
            const id = Number(req.params.id)
            const result = await this.findTable.byId(id)
            const status = result == undefined ? 404 : 200
            res.status(status).json(result)
        } catch (error) {
            next(error)
        }
    }

    async getTables(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.findTable.all();
            const transformData = data.map(t => { return { id: t.id, name: t.name } })
            return res.status(200).json(transformData)
        } catch (error) {
            next(error)
        }
    }
    async getTablesDetail(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.findTable.all();
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

const tableController = new TableControlle(dynamicTablesFind)
export { tableController }