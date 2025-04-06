const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

const FILE = './data.json';

app.post('/save', (req, res) => {
  const version = req.body;
  if (!version) return res.status(400).send('Missing content');

  let versions = [];
  if (fs.existsSync(FILE)) {
    versions = JSON.parse(fs.readFileSync(FILE));
  }
  versions.push({ time: new Date(), content: version });

  fs.writeFileSync(FILE, JSON.stringify(versions, null, 2));
  res.send({ status: 'saved' });
});

app.get('/versions', (req, res) => {
  if (!fs.existsSync(FILE)) return res.json([]);
  const versions = JSON.parse(fs.readFileSync(FILE));
  res.json(versions);
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
