import { handler } from './build/handler.js';
import { sso } from 'node-expose-sspi';
import connect from 'connect';

const app = connect();
app.use(sso.auth());
app.use(handler);

app.listen(3000, () => console.log('Server started on port 3000'));
