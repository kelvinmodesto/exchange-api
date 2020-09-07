import cookieParser from 'cookie-parser';
import express from 'express';
import { config } from 'dotenv';
import httpErrors from 'http-errors';
import morgan from 'morgan';

import { transactionsRouter } from './routes';

config();
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/transactions', transactionsRouter());

// catch 400 and forward to error handler
app.use((req: any, res: any, next: any): any => next(httpErrors(400)));

// error handler
app.use((err: any, req: any, res: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
