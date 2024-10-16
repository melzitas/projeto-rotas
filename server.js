const express = require('express');
const path = require('path')
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'formulario.html'));
});

app.get('/chanel', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'paginainicial.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobre.html'));
});

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);

}); 
