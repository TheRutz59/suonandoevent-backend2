import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

const items = [{ id: 1, name: 'Impianto Audio', quantity: 2 }];
const bookings = [{ id: 1, itemId: 1, startDate: new Date().toISOString(), endDate: new Date().toISOString() }];

app.post('/auth/login', (req, res) => res.json({ token: 'stub-token' }));
app.get('/inventory', (req, res) => res.json(items));
app.get('/bookings', (req, res) => res.json(bookings));

// health-check semplice (utile per Render)
app.get('/', (req, res) => res.send('OK'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
