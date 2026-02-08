import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta{
    constructor(erro){

        const mensagemErro = erro.message
        const tratamento = mensagemErro.split('~~~~~~\n  }\n}\n\n')
        super(`Os seguintes erros foram encontrados: ${tratamento[1]}`);
    }
};

export default ErroValidacao;