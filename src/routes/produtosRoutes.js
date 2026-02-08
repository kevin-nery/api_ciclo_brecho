import express from "express";
import ProdutosController from "../controllers/produtoController.js";

const routes = express.Router();

routes.get('/produtos', ProdutosController.listarProdutos)
.get('/produtos/:id', ProdutosController.listarProdutoPorId)
.patch('/produtos/:id', ProdutosController.atualizaProduto)
.post('/produtos', ProdutosController.cadastrarProduto)
.delete("/produtos/:id", ProdutosController.deletaProduto)

export default routes;