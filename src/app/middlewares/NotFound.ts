import { NextFunction, Request, Response } from "express"
import httpStatus from 'http-status';


export const NotFound = ((req: Request, res: Response, next: NextFunction) => {
    return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Route Not Found :(',
        error: '',
    })
})