const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhooks', (req, res) => {
  console.log('Webhook recibido:', req.body);
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Servidor de Webhooks funcionando ✅');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));
