import {check} from "express-validator";

const searchWeatherValidator = [
    check('cities')
        .not()
        .isEmpty()
        .withMessage('Cities is required'),
];

export {
    searchWeatherValidator,
}