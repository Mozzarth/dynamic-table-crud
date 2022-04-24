import { IMySqlConnection } from "../../../../shared/database/mysql/IConnection";
import { connectionMysql } from "../../../../shared/database/mysql/connection";
import { TableRow } from "../../shared/Table/dynamicTable";
import { IDynamicTableCreateRow } from "./IRepository";



class MysqlTableCreateRow implements IDynamicTableCreateRow {

    constructor(private readonly sql: IMySqlConnection) { }
    
   async handle(row: TableRow): Promise<void> {
        const connection = await this.sql.getConnection();
        try {
            const statament = `;`;
            return new Promise((res, rej) => {
                connection
                    .query(statament, (err, results, fields) => {
                        if (err) return rej(err);
                        return res()
                    });
            });
        } catch (error) {
            throw error
        } finally {
            connection.end();
        }
    }
}

const mysqlTableCreateRow = new MysqlTableCreateRow(connectionMysql)
export { mysqlTableCreateRow }