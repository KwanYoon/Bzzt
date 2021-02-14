// Basic imports
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// route imports
import postRoutes from './routes/postsRoutes.js';

// Initializing app
const app = express();

// calling env file
dotenv.config();

// parses incoming request bodies in a middleware before your handlers
//   available under req.body property
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// allows requesting of data from other domains
app.use(cors());

// routes (suffix, route)
app.use("/posts", postRoutes);

app.get('/', (req, res) => {
    res.send('Hello Bzzt');
});

// URL for the connection to the database on MongoDB
// CONNECTION_URL

// Port to heroku (temporarily port 5000)
const PORT = process.env.PORT || 5000;

// Connect to database / port
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));

// removes warnings
mongoose.set('useFindAndModify', false);