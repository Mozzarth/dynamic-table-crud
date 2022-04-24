
export interface ICellDto {
    columnId: number,
    value: object | undefined
}
export interface IDynamictableCreateRowDto {
    cells: ICellDto[]
}