import {check} from "express-validator";

const postCreateValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('content')
        .isLength({min: 20})
        .withMessage('Content is required, at least 20 characters long')
];

export {
    postCreateValidator
}