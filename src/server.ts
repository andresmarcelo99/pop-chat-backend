import express, { Request, Response } from 'express';
import cors from 'cors';
import { AppDataSource } from './database';

const app = express();
const port = Number(process.env.PORT || 8080);

//Init db connection
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

//Config cors
var corsOptions = {
  origin: 'http://localhost:UI',
};
app.use(cors(corsOptions));

// Parse requests for json and form-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to popchat api' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
