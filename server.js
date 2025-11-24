const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu servidor Express');
});
app.post('/dados', (req, res) => {
  const { nome, idade } = req.body;

  res.send(`Recebi os dados de ${nome} que tem ${idade} anos.`);
});

app.listen(3000, () => console.log('🔥 servidor está funcionando'));