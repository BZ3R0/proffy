import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request body): Dados para criação ou atualização de um registro
// Routes Params: Identificar qual recurso eu quero atualizar ou deletar /:id
// Query Params: Paginação /user?page=2&sort=nome


// ouve uma requisição http. o parametro é a porta
app.listen(3333);