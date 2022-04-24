export interface TableDetail {
    id: number;
    name: string;
    columns: Column[];
}

export interface Column {
    id: number;
    header: string;
    dataType: DataType;
    required: boolean;
    format?: string;
}

export enum DataType {
    Date = "Date",
    Int = "Int",
    String = "String",
}