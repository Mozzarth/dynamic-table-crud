import { mysqlTableFind } from "./repository";
import { DynamicTablesFind } from "./usecase";

const dynamicTablesFind = new DynamicTablesFind(mysqlTableFind);
export { dynamicTablesFind }