import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// http://localhost:3333/users => rota

// users => recurso

// GET: Buscar ou listar => MÉTODO
// POST: Criar uma nova informação => MÉTODO
// PUT: Atualizar uma informação existente => MÉTODO
// DELETE: Deletar uma informação => MÉTODO

// Corpo (Request body): dados para criação ou atualização de um registro
// Route params: Identificar qual recurso atualizar ou deletar
// Query params: paginação, filtros, ordenação

app.listen(3333);