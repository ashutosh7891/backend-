import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Route for the homepage
app.get('/', (req, res) => {
    res.send('Hello there!!!');
});

// Route for getting jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: "Pun-derful", content: "Why did the bicycle fall over? Because it was two-tired!" },
        { id: 2, title: "Laugh-tastic", content: "What did one wall say to the other wall? I'll meet you at the corner!" },
        { id: 3, title: "Hilarity Ensues", content: "Why don't scientists trust atoms? Because they make up everything!" },
        { id: 4, title: "Chuckle Worthy", content: "What do you call a fake noodle? An Impasta!" },
        { id: 5, title: "Giggles Galore", content: "Why did the kid throw his clock out the window? Because he wanted to see time fly!" }
    ];
    res.json(jokes); // Sending JSON response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
