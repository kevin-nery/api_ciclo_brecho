import ErroBase from '../erros/ErroBase.js';
import RequisicaoIncorreta from '../erros/RequisicaoIncorreta.js';
import ErroValidacao from '../erros/ErroValidacao.js';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/client';


function manipuladorDeErros(erro, req, res, next){    
    console.log(erro)

    if(erro instanceof PrismaClientKnownRequestError){
        console.log(erro)

        switch (erro.code) {
            case "P2003":
                return new RequisicaoIncorreta(`Algum campo relacional possui o valor invalido`).enviarResposta(res);
            case "P2002":
                return new RequisicaoIncorreta("Este registro está duplicado").enviarResposta(res);
            default:
                return new ErroBase('Erro ao processar a requisição no banco de dados',500).enviarResposta(res);
        }
    }else if(erro instanceof PrismaClientValidationError){
        new ErroValidacao(erro).enviarResposta(res);
    } else if(erro instanceof ErroBase){
        erro.enviarResposta(res);
    } else {
        new ErroBase().enviarResposta(res)
    }
};

export default manipuladorDeErros;