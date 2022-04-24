import { DynamicTablesCreateRow } from '../../../../app/core/dynamicTable/row/create/usecase';
import { DynamicTablesDeleteRow } from '../../../../app/core/dynamicTable/row/delete/usecase';
import { TableCell } from "./../../../../app/core/dynamicTable/shared/Table/dynamicTable";
import { TableRow } from '../../../../app/core/dynamicTable/shared/Table/dynamicTable';
import { dynamicTablesDeleteRow } from '../../../../app/core/dynamicTable/row/delete';
import { dynamicTablesCreateRow } from '../../../../app/core/dynamicTable/row/create';
import { IDynamictableCreateRowDto } from './table-row.dto';
import { Request, Response, NextFunction } from 'express'


class DynamicTableRowController {

    constructor(
        private createRowRepo: DynamicTablesCreateRow,
        private deleteRowRepo: DynamicTablesDeleteRow
    ) { }

    async deleteByid(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            await this.deleteRowRepo.byIdRow(id);
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    }

    async createRow(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            const row: IDynamictableCreateRowDto = req.body
            const cellsRow = row.cells.map(c => new TableCell(c.columnId, c.value || null))
            await this.createRowRepo.handle(id, new TableRow(null, cellsRow))
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    }
}

const dynamicTableRowController = new DynamicTableRowController(dynamicTablesCreateRow, dynamicTablesDeleteRow)
export { dynamicTableRowController }