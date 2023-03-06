const axios = require("axios");
const FormData = require("form-data");

const env = process.env;
const celcoinAPI = env.NODE_ENV == "production" ? env.API_BASE_TRANSACTIONS : env.API_BASE_SANBOX;

class celcoin {
    constructor(){

    }
    /**
     * Gera o token para autenticação dos endpoints da API.
     * @source <https://developers.celcoin.com.br/reference/post_v5-token>
    */
    async token(){
        const form = new FormData();

        form.append("client_id", env.client_id );
        form.append("grant_type", env.grant_type );
        form.append("client_secret", env.client_secret );
    
        return await axios.post( `${celcoinAPI}/v5/token`, form , {
            headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data'
            }
        })
        .then((response) => {
            console.log(response.data);
            return response.data.access_token;
        })
        .catch((err) => {
            throw  false;
        });
    }

    /**
     * Headers Celcoin
    */
    async headers(){
        return {
            headers: {
                'authorization': this.token(),
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        };
    }
    /**
     * Criar múltiplas contas PF 
     * @source <https://developers.celcoin.com.br/reference/criar-contas-pf>
     * @source <https://developers.celcoin.com.br/docs/criar-contas-em-lote#2criar-contas-pj>
    */
    async criarContas(body, type = "pf"){
        const typeAccount = type == "pf" ? "natural-person" : (type == "pj" ? "business" : "natural-person" );
        const bodyDatas = JSON.stringify(body);
        return await axios.post( `${celcoinAPI}/baas-onboarding/v1/account/${typeAccount}/create/bulk`, bodyDatas, this.headers())
        .then((response) => { return response.data })
        .catch((err) => { return err });
    }
    /**
     * Criar Conta PF/PJ individual
    */
    async criarConta(body, type = "pf"){
        const typeAccount = type == "pf" ? "natural-person" : (type == "pj" ? "business" : "natural-person" );
        const bodyDatas = JSON.stringify(body);
        return await axios.post( `${celcoinAPI}/baas-onboarding/v1/account/${typeAccount}/create`, bodyDatas, this.headers())
        .then((response) => { return response.data })
        .catch((err) => { return err });
    }
    /**
     * Desativar uma Conta PF/PJ individual
     * @source <https://developers.celcoin.com.br/docs/desativar-excluir-a-conta#desativar-uma-conta>
    */
    async desativarConta(bulkData, query){
        const bulkDatas = JSON.stringify(bulkData);
        return await axios.put( `${celcoinAPI}/baas-accountmanager/v1/account/status?${query}`, bulkDatas, this.headers())
        .then((response) => { return response.data })
        .catch((err) => { return err });
    }
    /**
     * Encerrar uma Conta PF/PJ individual
     * @source <https://developers.celcoin.com.br/docs/desativar-excluir-a-conta#encerrar-conta>
    */
    async encerrarConta(bulkData, query){
        const bulkDatas = JSON.stringify(bulkData);
        return await axios.put( `${celcoinAPI}/baas-accountmanager/v1/account/close?${query}`, bulkDatas, this.headers())
        .then((response) => { return response.data })
        .catch((err) => { return err });
    }
    /**
     * Consultar Conta pelo DocumentNumber ( PF/PJ )
     * @source <https://developers.celcoin.com.br/docs/criar-contas-em-lote-1#consultar-conta-pelo-documentnumber-1>
    */
    async consultarConta(DocumentNumber, type = "pf"){
        const typeAccount = type == "pf" ? "fetch" : (type == "pj" ? "fetch-business" : "fetch" );
        return await axios.get( `${celcoinAPI}/baas-onboarding/v1/account/${typeAccount}?DocumentNumber=${DocumentNumber}`, this.headers())
        .then((response) => { return response.data })
        .catch((err) => { return err });
    }
   /**
     * Criar chave Pix
     * @source <https://developers.celcoin.com.br/docs/cadastrar-uma-chave-pix#criar-chave-pix>
    */
    async criarChavePix(body){
        const bulkDatas = JSON.stringify(bulkData);
        return await axios.get( `${celcoinAPI}/celcoin-baas-pix-dict-webservice/v1/pix/dict/entry`, bulkDatas, this.headers())
        .then((response) => { return response.data })
        .catch((err) => { return err });
    }
   /**
     * Consultar  chave Pix
     * @source <https://developers.celcoin.com.br/docs/consultar-chaves-pix-de-uma-conta-copy>
    */
    async consultarChavePix(Numero_da_Conta){
        return await axios.get( `${celcoinAPI}/celcoin-baas-pix-dict-webservice/v1/pix/dict/entry/${Numero_da_Conta}`, this.headers())
        .then((response) => { return response.data })
        .catch((err) => { return err });
    }
}
module.exports = {
    celcoin
}