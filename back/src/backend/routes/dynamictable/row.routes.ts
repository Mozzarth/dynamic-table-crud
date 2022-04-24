import { dynamicTableRowController } from "../../controllers/dynamictable/row/table-row.controller";
import { createRowMidd, deleteRowByIdMidd } from "../../controllers/dynamictable/row/table-row.midd";
import { Router } from "express";


const rt = Router()
const ctrl = dynamicTableRowController


rt.delete("/row/:id", deleteRowByIdMidd(), ctrl.deleteByid.bind(ctrl))
rt.put("/row", createRowMidd(),ctrl.createRow.bind(ctrl))

export {rt as rtTableRow}