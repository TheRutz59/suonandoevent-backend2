import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Route di test per la root "/"
app.get('/', (req, res) => {
  res.send('Backend funzionante 🚀');
});

// Esempio: altra route API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Ciao dal backend!' });
});

// Avvio server
app.listen(port, () => {
  console.log(`Server avviato su porta ${port}`);
});
