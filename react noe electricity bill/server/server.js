const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/calculate', (req, res) => {
  const { units, rate } = req.body;
  if (!units || !rate) {
    return res.status(400).send('Units and rate are required');
  }
  const total = units * rate;
  res.json({ total });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
