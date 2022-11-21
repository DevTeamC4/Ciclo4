import app from './app.js';
import { DBconnection } from './db.js';
import { PORT } from './config.js';

DBconnection();

app.listen(PORT);
console.log("Server listening on port", PORT);