import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import auth from './routes/auth';

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://danial:technosoft786@ds135441.mlab.com:35441/bookworm-db', { useNewUrlParser: true });

app.use('/api/auth', auth);

// app.post('/api/auth', (req, res) => {
//     res.status(400).json({
//         errors: {
//             global: 'invalid credentials'
//         }
//     });
// });

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => {
    console.log('Express Server running on 8080');
});