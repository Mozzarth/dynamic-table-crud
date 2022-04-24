import { IMySqlConnection } from "../../../../shared/database/mysql/IConnection";
import { connectionMysql } from "../../../../shared/database/mysql/connection";
import { IDynamicTableDeleteRow } from "./IRepository";



class MysqlTableDeleteRow implements IDynamicTableDeleteRow {

    constructor(private readonly sql: IMySqlConnection) { }

    async byId(id: number): Promise<void> {
        const connection = await this.sql.getConnection();
        try {
            const statament = `update tableData set anulado = 1 where id = ${id} ;`;
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

const mysqlTableDeleteRow = new MysqlTableDeleteRow(connectionMysql)
export { mysqlTableDeleteRow}