import { CustomErrorHandler } from "../services/index.js";

const errorHandler = (error, req, res, next) => {
    let statusCode = 500;
    let errorData = {
        message: "Internal Server Error",
        ...(DEVELOPER_MODE === 'true' && {realError: error.message})
    }

    if (error instanceof CustomErrorHandler) {
        statusCode = error.status;
        errorData = {
            code: false,
            error: "CustomErrorHandler Error",
            message: error.message
        }
    }

    return res.status(statusCode).json(errorData)
}

export default errorHandler;
