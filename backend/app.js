const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const SERVER_ID = process.env.SERVER_ID || 'Backend-Unknown';

let requestCount = 0;

app.get('/', (req, res) => {
    requestCount++;
    res.json({
        server: SERVER_ID,
        timestamp: new Date().toISOString(),
        requestNumber: requestCount,
        message: 'ci-cd funcionando aqui!',
        uptime: process.uptime()
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', server: SERVER_ID });
});

app.listen(PORT, () => {
    console.log(`${SERVER_ID} rodando na porta ${PORT}`);
});