// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const userRoutes = require('./routes/index');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use('/api', userRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database connected and models synced');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
