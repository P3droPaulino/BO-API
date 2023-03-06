const axios = require("axios");
const FormData = require("form-data");

const env = process.env;
const celcoinAPI = env.NODE_ENV == "production" ? env.API_BASE_TRANSACTIONS : env.API_BASE_SANBOX;

const celcoinGetToken = async () => {
    console.clear();
    const form = new FormData();

    form.append("client_id", env.client_id );
    form.append("grant_type", env.grant_type );
    form.append("client_secret", env.client_secret );

    return await axios.post( `${celcoinAPI}/v5/token`, form , { headers: { 'accept': 'application/json', 'content-type': 'multipart/form-data' } })
    .then((response) => {
        console.log(response.data);
        return response.data.access_token;
    })
    .catch((err) => {
        throw  err;
    });
}
const celcoinCriarContasPF = async () => {
    return celcoinGetToken();
}
module.exports = {
    celcoinGetToken,
    celcoinCriarContasPF
}