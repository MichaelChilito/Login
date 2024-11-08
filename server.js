const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Configuración para manejar datos de formulario
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para el login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'admin' && password === '12345') {
    res.send('<h1>Login exitoso!</h1>');
  } else {
    res.send('<h1>Credenciales incorrectas!</h1>');
  }
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
