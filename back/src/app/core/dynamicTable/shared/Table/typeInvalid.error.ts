import { TableColumn } from "./dynamicTable"


export class TypeInvalidError extends Error {

    constructor(type : string){
        const msg = `invalid type ${type}, the types valid : ${TableColumn.typesValid().join(",")}`
        super()
    }

}