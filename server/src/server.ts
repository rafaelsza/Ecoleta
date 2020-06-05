import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import {errors} from 'celebrate';


const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

// ROTA:  Endereço completo da requisição
// RECURSO: Qual entidade estamos acessando do sistema

// GET: buscar uma ou mais informações do back-end
// PORT: criar uma informação
// PUT: atualizar uma informação
// DELETE: deletar uma informação

// POST http://localhost:3333/users = Criar ususário
// GET http://localhost:3333/users = Listar ususário
// GET http://localhost:3333/users/5 = Buscar dados do ususário ID 5

// Request Param: Parametros que vem na própria rota que identifiquem um recurso
// Query Param: Parametros que vem na própria rota geralmente opcionais para filtros e paginação
// Request body: Paramentros para criação/atualização de informação




app.listen(3333);