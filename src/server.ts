import express from 'express';
import path from 'path'
import cors from 'cors';
import 'express-async-errors'
import './database/connection';

import routes from './routes'
import errorHandler from './errors/handler';

const app = express();

// proteção para requisição de dominios diferentes
app.use(cors());

app.use(express.json());

// rotas
app.use(routes);

// rota para images
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

// lidar exceções
app.use(errorHandler);

app.listen(3333);