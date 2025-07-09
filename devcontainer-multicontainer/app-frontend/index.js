const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  try {
    const response = await fetch('http://backend:8080/api');
    const text = await response.text();
    res.send(`<h1>Frontend</h1><p>Backend says: ${text}</p>`);
  } catch (err) {
    res.send(`<h1>Frontend</h1><p>Could not reach backend</p>`);
  }
});

app.listen(PORT, () => {
  console.log(`Frontend running on :${PORT}`);
});
