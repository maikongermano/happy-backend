import express from 'express';
import path from 'path'
import './database/connection';

import routes from './routes'

const app = express();

app.use(express.json());

// rotas
app.use(routes);

// rota para images
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(3333);