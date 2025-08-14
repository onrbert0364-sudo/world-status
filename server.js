// Minimal /latest.json server for Render
const express = require('express');
const app = express();

app.get('/latest.json', (req, res) => {
  res.type('application/json').send({
    vessel: "The World",
    location: "TBD",
    last_port: "TBD",
    departed_at: null,
    sea_days: 0
  });
});

app.get('/', (_, res) => res.send('OK'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('listening on ' + PORT));
