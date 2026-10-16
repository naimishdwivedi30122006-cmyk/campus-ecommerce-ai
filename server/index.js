const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Node server chal raha hai' });
});

app.listen(5000, () => console.log('Server port 5000 par'));