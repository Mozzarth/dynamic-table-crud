import { ColumnRequiredError, ColumnTypeError, IncomleteCells, NotFoundColumnError as NotFoundColumnError } from "./dynamicTable.errors";
import { TypeInvalidError } from "./typeInvalid.error";


export enum TableDataTypes {
    date = "Date",
    int = "Int",
    string = "String"
}

export class Table {

    private rows: TableRow[] = []

    constructor(
        public readonly id: number | undefined,
        public readonly name: string,
        private readonly columns_: TableColumn[]
    ) { }


    public addRow(row: TableRow) {
        if (row.cells.length !== this.columns_.length) throw new IncomleteCells()
        const newCells : TableCell[] = []
        row.cells.forEach(cell => {
            const { columnId, value } = cell
            let currentValue : any = value
            const currentColumn = this.columnById(columnId)
            if (currentColumn === undefined) throw new NotFoundColumnError(columnId)
            const { isRequired, header,dataType} = currentColumn
            if (isRequired && value == null) throw new ColumnRequiredError(header)
            if(isRequired && value != undefined){
                currentValue = this.formatType(dataType,value,header)
            }
            newCells.push(new TableCell(columnId,currentValue))
        })
        const newRow = new TableRow(row.id, newCells)
        this.rows.push(newRow)
        return this;
    }

    columnById(id: number) {
        return this.columns_.find(c => c.id == id)
    }
    columns() {
        return this.columns_
    }
    toJson() {
        return {
            id: this.id,
            name: this.name,
            columns: this.columns_.map(c => c.toJson())
        }
    }
    private formatType(type: TableDataTypes,value : any,nameColumn : string){
        try {
            if (type === TableDataTypes.date) {
                return new Date(value)
            }
            if (type === TableDataTypes.int) {
                return Number(value)
            }
            if (type == TableDataTypes.string) {
                return String(value)
            }
        } catch (error) {
            throw new ColumnTypeError(nameColumn)
        }
    }
}

export class TableColumn {

    constructor(
        public readonly id: number | null,
        public readonly header: string,
        public readonly dataType: TableDataTypes,
        public readonly isRequired: boolean,
        public readonly format: string | null
    ) {
        const dataTypeValid = TableColumn.typesValid().includes(this.dataType)
        if (!dataTypeValid) throw new TypeInvalidError(this.dataType)
    }

    toJson() {
        return {
            id: this.id,
            header: this.header,
            dataType: this.dataType,
            required: this.isRequired,
            format: this.format || undefined
        }
    }

    public static typesValid() {
        return Object.keys(TableDataTypes).map((e) => (TableDataTypes as any)[e])
    }
}

export class TableRow {
    constructor(
        public readonly id: number | null,
        public readonly cells: TableCell[]
    ) { }
}

export class TableCell {

    constructor(
        public readonly columnId: number,
        public readonly value: object | null
    ) {  }
}