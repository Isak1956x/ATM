import express from 'express';
import atmRoute from './routes/ATMRoute.js';
import {engine} from 'express-handlebars';
import path from 'path';
import { projectRoot } from './utils/paths.js';

const app = express();

app.engine('hbs', engine())
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static(path.join(projectRoot, 'public')));

app.use(express.urlencoded()
);
app.use(atmRoute);

app.use((req, res) => {
    res.status(404).render('404', {layout: false});
});
app.listen(8080);

