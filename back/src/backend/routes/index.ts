import { rtTableRow } from './dynamictable/row.routes'
import { rtTable } from './dynamictable'
import { Router } from 'express'



const rt = Router()

rt.use(rtTable)
rt.use("/table", rtTableRow)

export { rt as router }