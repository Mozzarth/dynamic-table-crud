import { validRouterExpressValidator } from "../../../shared/middleware/expressValidator.midd";
import { body, param } from "express-validator";



export function deleteRowByIdMidd() {
    return [
        param("id").exists().isInt({ min: 0 }).withMessage("Invalid id"),
        validRouterExpressValidator
    ]
}

export function createRowMidd(){
    return [
        body("columnId").exists().isInt({min : 0}),
        body("cells").exists().isArray().isLength({min : 0}),
        validRouterExpressValidator
    ]
}