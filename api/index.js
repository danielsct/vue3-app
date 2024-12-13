const express = require('express');
const cors = require('cors');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Generamos datos falsos con faker.js
const generateFakeData = () => {
    const fakeData = [];
    for (let i = 1; i <= 9; i++) {
      fakeData.push({
        id: i,
        name: faker.person.fullName(),
        email: faker.internet.email(),
      });
    }
    return fakeData;
  };

// Endpoint /api/data
app.get('/api/data', (req, res) => {
    const data = generateFakeData();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server en http://localhost:${port}`);
});
