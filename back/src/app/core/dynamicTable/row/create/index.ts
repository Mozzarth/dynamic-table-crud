import { mysqlTableFind } from "../../table/find/repository"
import { mysqlTableCreateRow } from "./repository"
import { DynamicTablesCreateRow } from "./usecase"



const dynamicTablesCreateRow = new DynamicTablesCreateRow(mysqlTableFind, mysqlTableCreateRow)
export { dynamicTablesCreateRow}