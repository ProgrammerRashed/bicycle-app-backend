import cors from 'cors';
import express, { Application } from 'express';
import router from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import config from './app/config';
import { NotFound } from './app/middlewares/NotFound';

const app: Application = express();

//express json support
app.use(express.json());

//cors handler
app.use(
  cors({
    origin: [
      config.frontend_url as string,
    ],
    credentials: true,
  }),
);

// application routes
app.use('/api', router);


// Global Error Handler 
app.use(globalErrorHandler);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is up and running .... :)',
  });
});

//404 Route
app.use(NotFound);

export default app;
