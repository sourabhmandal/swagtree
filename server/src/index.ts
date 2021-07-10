import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { info } from './config/logging';

require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.json())

/** Log the request */
app.use((req: Request, res: Response, next: NextFunction) => {
  /** Log the req */
  info(
    'API',
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );
  res.on('finish', () => {
    /** Log the res */
    info(
      'API',
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
    );
  });
  next();
});

/** Rules of our API */
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
  return;
});

//Router API
app.use('/', (req: Request, res: Response) =>
  res.status(200).send({ some: 'json' })
);

// run server
app.listen(8080, () => {
  info('SERVER', `Server is running localhost:${8080}`);
});
/** Error handling */
app.use((res: Response) => {
  const error = new Error('Not found');
  res.status(404).json({
    message: error.message,
  });
});
