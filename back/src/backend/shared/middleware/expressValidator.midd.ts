import { validationResult } from "express-validator";
import { Request,Response, NextFunction } from "express";

export function validRouterExpressValidator(req: Request, res: Response, next: NextFunction) {
    try {
        const _error = validationResult(req);
        if (!_error.isEmpty()) {
            return res.status(400).json(_error)
        }
        next();
    } catch (error) {
        next(error);
    }
}
