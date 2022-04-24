import { Response, Request, NextFunction } from "express";

export function routerNotFound(req: Request, res: Response, next: NextFunction) {
    return res.status(404).send()
}