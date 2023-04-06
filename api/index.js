const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/rating', async (req, res) => {
	const { rating, name, comment } = req.body;

	if (rating < 1 || rating > 5 || typeof name !== 'string') {
		return res.status(400).json({ error: 'Dados inválidos.' });
	}

	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	await delay(2000);

	console.log(`Rating: ${rating}, Name: ${name}, Comment: ${comment}`);

	res.status(200).json({ message: 'Avaliação recebida com sucesso!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
