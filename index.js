const express = require('express');
require('dotenv').config();
const app = express();
const schoolRoutes = require('./routes/schoolroutes');

app.use(express.json());
app.use('/', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
