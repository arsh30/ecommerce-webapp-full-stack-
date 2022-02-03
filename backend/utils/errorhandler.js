class ErrorHandler extends Error {  //Error is a Node default class, extends means errorhandler jo hai vo inherit hora hai Error se
    constructor(message, statusCode) {
        super(message);  //jo constructor se mila h
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.constructor);
        
    }
}

module.exports = ErrorHandler
//but we cannot use now because hme middleWare create krna hoga