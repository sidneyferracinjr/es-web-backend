const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const app = express();
const port = 3001;

// Middleware para processar dados JSON
app.use(express.json());

// Configurar diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usar o roteador de rotas
app.use('/', indexRouter);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});