const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Mulher 1',
        imagem: 'http1',
        minibio: 'Teste 1'
    },
    {
        nome: 'Mulher 2',
        imagem: 'http2',
        minibio: 'Teste 2'
    },
    {
        nome: 'Mulher 3',
        imagem: 'http3',
        minibio: 'Teste 3'
    },
]

function mostraPorta(){
    console.log('Servidor criado e rodando na porta ', porta);
}

function mostraMulheres(request,response) {
    response.json(mulheres)
}

app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta,mostraPorta)