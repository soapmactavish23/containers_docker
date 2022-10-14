const express = require('express');
const app = express();
let port = 3000;

app.get('/', (req, res) => {
   res.send('Olá minha imagem!');
});

app.listen(port, () => {

    console.log(`Executando na porta: ${port}`);

});