import { prisma } from "../lib/prisma.ts";

class ProdutosController {
    static async listarProdutos(req, res, next){
        try {
            const produtosEncontrados = await prisma.produtos.findMany()
            res.status(200).json(produtosEncontrados);
        } catch (e) {
            next(e)
            
        }
    };
    static async listarProdutoPorId(req, res, next){
        try {
            const id = parseInt(req.params.id);
            const produtoEncontrado = await prisma.produtos.findUnique({
                where: {
                    id: id
                }
            });

            if(produtoEncontrado){
             res.status(200).json(produtoEncontrado);
            } else {throw new Error();}    
        } catch (e) {
            next(e)
        }
    };
    static async cadastrarProduto(req, res, next){
        const novoProduto = req.body;        
        try {
           await prisma.produtos.create({
            data: novoProduto
           });
           res.status(201).json({message: "Produto criado com sucesso", produto: novoProduto});
        } catch (e) {
            next(e);
        }
    };
    static async atualizaProduto(req, res, next){
        const id = parseInt(req.params.id);
        const info = req.body;
        try {
            await prisma.produtos.update({
                where: {
                    id: id
                },
                data: info
            });
            res.status(200).json({message: `Produto ${id} atualizado com sucesso`})
        } catch (e) {
            next(e);
        }
    };
    static async deletaProduto(req, res, next){
        const id = parseInt(req.params.id);
        try {
            await prisma.produtos.delete({where: {id: id}})
            res.status(200).json({message: `Produto ${id} deletado com sucesso`})
        } catch (e) {
            next(e);
        }
    }
}

export default ProdutosController;