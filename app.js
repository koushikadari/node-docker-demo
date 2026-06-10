const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Movie Ticket Booking</title>
        <style>
            body{
                font-family: Arial, sans-serif;
                background:#f4f4f4;
                text-align:center;
                padding:20px;
            }
            .container{
                width:80%;
                margin:auto;
            }
            .movie{
                background:white;
                padding:20px;
                margin:20px;
                border-radius:10px;
                box-shadow:0 0 10px rgba(0,0,0,0.1);
            }
            button{
                background:#007bff;
                color:white;
                border:none;
                padding:10px 20px;
                cursor:pointer;
                border-radius:5px;
            }
            button:hover{
                background:#0056b3;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🎬 Movie Ticket Booking</h1>

            <div class="movie">
                <h2>Avengers Endgame</h2>
                <p>Show Time: 10:00 AM</p>
                <p>Price: $10</p>
                <button onclick="alert('Ticket Booked Successfully!')">
                    Book Ticket
                </button>
            </div>

            <div class="movie">
                <h2>Spider-Man</h2>
                <p>Show Time: 2:00 PM</p>
                <p>Price: $12</p>
                <button onclick="alert('Ticket Booked Successfully!')">
                    Book Ticket
                </button>
            </div>

            <div class="movie">
                <h2>Batman</h2>
                <p>Show Time: 6:00 PM</p>
                <p>Price: $15</p>
                <button onclick="alert('Ticket Booked Successfully!')">
                    Book Ticket
                </button>
            </div>
        </div>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Movie Booking App Running on Port ${PORT}`);
});
