import { mysqlTableDeleteRow } from "./repository"
import { DynamicTablesDeleteRow } from "./usecase"


const dynamicTablesDeleteRow = new DynamicTablesDeleteRow(mysqlTableDeleteRow)
export { dynamicTablesDeleteRow }
