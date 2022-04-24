import { validRouterExpressValidator } from "../../../shared/middleware/expressValidator.midd";
import { param } from "express-validator";


export function findTableByIDMidd() {
    return [
        param("id").exists().isInt({min : 0}),
        validRouterExpressValidator
    ]
}