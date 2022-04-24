

export class NotFoundColumnError extends Error {
    constructor(idColumn: number) {
        super(`Not found column id: ${idColumn}`)
    }
}
export class ColumnRequiredError extends Error {
    constructor(nameColumn: string) {
        super(`column ${nameColumn} is required but no data found`)
    }
}
export class ColumnTypeError extends Error {
    constructor(nameColumn: string) {
        super(`Error column ${nameColumn} type`)
    }
}

export class IncomleteCells extends Error {
    constructor() {
        super("The number of cells does not match the number of columns")
    }
}