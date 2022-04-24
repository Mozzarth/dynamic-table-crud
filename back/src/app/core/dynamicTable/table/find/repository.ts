import { IMySqlConnection } from "../../../../shared/database/mysql/IConnection";
import { connectionMysql } from "../../../../shared/database/mysql/connection";
import { TableColumn, TableDataTypes } from "../../shared/Table/dynamicTable";
import { Table } from "../../shared/Table/dynamicTable";
import { IDynamicTableFind } from "./IRepository";


type IResultTable = {
    tableId: number, name: string,
    idStructure: number, header: string,
    dataType: TableDataTypes,
    format: string | undefined,
    required: boolean
}


class MysqlTableFind implements IDynamicTableFind {

    constructor(private readonly sql: IMySqlConnection) { }
    
    
    
    async byId(idTable: number): Promise<Table | undefined> {
        const connection = await this.sql.getConnection();
        try {
            const statament = `
             select
		        a.id as tableId,
                a.name, b.id as idStructure,
                b.header,b.dataType,
                b.format,b.required
	        from tableType as a join
		         tableStructure as b on a.id = b.tableTypId
                    and a.id = ${idTable}
                    and a.anulado = 0
			        and b.anulado = 0;`;

            return new Promise((res, rej) => {
                connection.query(statament, (err, results: IResultTable[], fields) => {
                    if (err) return rej(err);
                    if (results.length == 0) return res(undefined);
                    const table = this.getTables(results)[0]
                    res(table)
                });
            });

        } catch (error) {
            throw error
        } finally {
            connection.end();
        }
    }

    async all(): Promise<Table[]> {
        const connection = await this.sql.getConnection();
        try {
            const statament = `
             select
		        a.id as tableId,a.name,
                b.id as idStructure,
                b.header,b.dataType,
                b.format,b.required
	        from tableType as a join
		         tableStructure as b on a.id = b.tableTypId
                    and a.anulado = 0
			        and b.anulado = 0;`;

            return new Promise((res, rej) => {
                connection.query(statament, (err, results: Array<IResultTable>, fields) => {
                    if (err) return rej(err);
                    if (results.length == 0) return res([]);
                    res(this.getTables(results))
                });
            });

        } catch (error) {
            throw error
        } finally {
            connection.end();
        }
    }


    private getTables(results: IResultTable[]) {
        const objColumns: { [key: number]: { columns: TableColumn[], tableName: string } } = {};
        (results).forEach(result => {
            const { tableId, name, idStructure, header, dataType, format, required } = result

            const column = new TableColumn(idStructure, header, dataType, Boolean(required), format || null)
            if (objColumns[tableId] === undefined) {
                objColumns[tableId] = { columns: [column], tableName: name }
            } else {
                objColumns[tableId].columns.push(column)
            }
        });
        const tables = Object.keys(objColumns).map(key => {
            const { tableName, columns } = objColumns[Number(key)]
            return new Table(Number(key), tableName, columns)
        })
        return tables
    }

}

const mysqlTableFind = new MysqlTableFind(connectionMysql)
export { mysqlTableFind}