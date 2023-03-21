import express from 'express';
import { sso } from 'node-expose-sspi';
import { handler } from './build/handler.js';

const app = express();
app.use(sso.auth());
app.use(handler);

app.listen(3000, () => console.log('Server started on port 3000'));
