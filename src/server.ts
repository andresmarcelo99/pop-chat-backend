import express, { Request, Response } from 'express';
const app = express();
const port = Number(process.env.PORT || 8080);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
