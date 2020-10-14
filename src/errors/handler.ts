import { ErrorRequestHandler } from 'express'

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    console.error(error);

    // resposta para o cliente
    return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;