import mysql from 'mysql'

export interface IMySqlConnection {
    getConnection(): Promise<mysql.Connection>
    close(): void
}