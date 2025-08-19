const express = require('express');
const app = express();

// kode untuk menjalankan engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

// Kode untuk akses ke halaman top
app.get ('/', (req, res) => {
    res.render('top');
});

// Kode untuk akses ke halaman beranda
app.get('/beranda', (req, res) => {
    res.render('beranda');
})

app.listen(3000);