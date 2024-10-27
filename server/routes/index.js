const express = require('express');
const router = express.Router();

// Rota 1
router.get('/rota1', (req, res) => {
  res.send('<h1>Rota 1</h1><a href="/rota2">Ir para Rota 2</a>');
});

// Rota 2
router.get('/rota2', (req, res) => {
  res.send('<h1>Rota 2</h1><a href="/rota1">Ir para Rota 1</a>');
});

// Rota para inverter texto
router.get('/inverter', (req, res) => {
  const texto = req.query.texto;
  if (texto) {
    const textoInvertido = texto.split('').reverse().join('');
    res.send(`<h1>Texto Invertido</h1><p>${textoInvertido}</p>`);
  } else {
    res.send('<h1>Erro</h1><p>Por favor, forneça um texto como parâmetro de consulta.</p>');
  }
});

// Rota para validar usuário e senha
router.post('/validar', (req, res) => {
  const { usuario, senha } = req.body;
  if (usuario && senha) {
    if (senha === usuario + usuario) {
      res.send(`<h1>Acesso OK</h1><p>Usuário: ${usuario}, Senha: ${senha}</p>`);
    } else {
      res.send(`<h1>Acesso Negado</h1><p>Usuário: ${usuario}, Senha: ${senha}</p>`);
    }
  } else {
    res.send('<h1>Erro</h1><p>Por favor, forneça usuário e senha.</p>');
  }
});

module.exports = router;