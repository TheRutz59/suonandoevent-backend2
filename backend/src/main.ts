import express from "express";
import cors from "cors";

const app = express();

// Permette richieste dal frontend
app.use(cors({
  origin: "https://tuo-frontend.onrender.com", // URL del frontend su Render
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend funzionante 🚀");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server avviato su porta ${port}`);
});
