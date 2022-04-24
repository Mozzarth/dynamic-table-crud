import { tableController } from "../../controllers/dynamictable/table/table.controller"
import { findTableByIDMidd } from "../../controllers/dynamictable/table/table.midd"
import { Router } from "express"

const rt = Router()
const ctrl = tableController

rt.get("/tables", ctrl.getTables.bind(ctrl))
rt.get("/tables/detail", ctrl.getTablesDetail.bind(ctrl))
rt.get("/table/:id", findTableByIDMidd(), ctrl.byId.bind(ctrl))

export { rt as rtTable }