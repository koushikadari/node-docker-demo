const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const movies = [
  {
    id: 1,
    name: "Avengers Endgame",
    time: "10:00 AM",
    price: 10
  },
  {
    id: 2,
    name: "Spider-Man No Way Home",
    time: "2:00 PM",
    price: 12
  },
  {
    id: 3,
    name: "Batman",
    time: "6:00 PM",
    price: 15
  },
  {
    id: 4,
    name: "John Wick 4",
    time: "8:00 PM",
    price: 18
  }
];

app.get("/", (req, res) => {

  let movieCards = movies.map(movie => `
      <div class="movie-card">
          <h2>${movie.name}</h2>
          <p><strong>Show Time:</strong> ${movie.time}</p>
          <p><strong>Price:</strong> $${movie.price}</p>
          <a href="/book/${movie.id}">
              <button>Book Ticket</button>
          </a>
      </div>
  `).join("");

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Movie Booking System</title>
        <style>
            body{
                font-family: Arial, sans-serif;
                background:#f4f4f4;
                margin:0;
                padding:0;
            }

            header{
                background:#111827;
                color:white;
                text-align:center;
                padding:20px;
            }

            .container{
                width:90%;
                margin:auto;
                display:grid;
                grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
                gap:20px;
                padding:30px;
            }

            .movie-card{
                background:white;
                border-radius:10px;
                padding:20px;
                box-shadow:0 2px 10px rgba(0,0,0,0.2);
                text-align:center;
            }

            button{
                background:#2563eb;
                color:white;
                border:none;
                padding:10px 20px;
                border-radius:5px;
                cursor:pointer;
            }

            button:hover{
                background:#1d4ed8;
            }
        </style>
    </head>
    <body>

        <header>
            <h1>🎬 Online Movie Ticket Booking</h1>
            <p>Select your movie and book tickets instantly</p>
        </header>

        <div class="container">
            ${movieCards}
        </div>

    </body>
    </html>
  `);
});

app.get("/book/:id", (req, res) => {

  const movie = movies.find(
    m => m.id === parseInt(req.params.id)
  );

  if (!movie) {
    return res.status(404).send("Movie Not Found");
  }

  res.send(`
    <h1>Booking Confirmed</h1>
    <h2>${movie.name}</h2>
    <p>Show Time: ${movie.time}</p>
    <p>Price: $${movie.price}</p>
    <a href="/">Back to Movies</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
