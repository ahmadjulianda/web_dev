// untuk server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

const PORT = 3001 // berbeda dengan api-produk
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});