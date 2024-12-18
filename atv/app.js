//leticia sofia cristina
const express = require('express');
const app = express();


app.use(express.json());

let pessoas = [];
 
app.get('/pessoa', (req, res) => {
    res.json(pessoas);
});

app.get('/pessoa/id:', (req, res) => {
    res.send('/pessoa:' + req.params.id);
});

app.post('/conteudo', (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const pessoa = {
        id, nome 
    };
    pessoas.push(pessoa);
    res.send('Pessoas:' + pessoa.id + pessoa.nome);
});

app.delete('/pessoa/:id', (req, res) => {
    pessoas.pop;
    res.send('deletado');

});

app.listen(3000, () => {
    console.log('Servidor em execução');
});