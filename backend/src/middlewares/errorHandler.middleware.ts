import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (
    error,
    req,
    res,
    next
): any => {
    if (error instanceof SyntaxError) {
        return res.status(400).json({
            message: "Invalid JSON format. Please check request body",
        });
    }
    return res.status(500).json({
        message: "Internal server error",
        error: error?.message || "Unknown error occured",
    });
};
