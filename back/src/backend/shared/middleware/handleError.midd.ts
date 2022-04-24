import {  ResourceNotFoundError } from "../../../app/shared/errors/resourceNotFound.error";
import { Request, Response, NextFunction  } from "express";


export function handleErrorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
    const infoError = getInformationError(error)
    return res.status(infoError.status).json({
        message: infoError.message,
        error : error
    })
}

function getInformationError(error: any): { status: number, message: string } {
    const internalError = "Internal Server error"
    const message = error.message || internalError
    let status: number = 500

    if (error instanceof ResourceNotFoundError){
        return { status: 401, message }
    }


    return { status, message }
}
