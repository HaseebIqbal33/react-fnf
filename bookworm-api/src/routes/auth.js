import express from 'express';
import User from '../models/User';


const router = express.Router();

router.post('/', (req, res) => {
    const { email } = req.body;
    User.findOne({ email: email }).then(user => {
        if (user) {

        } else {
            res.status(400).json({ errors: { global: 'Invalid credentials.' } });
        }
    });
});

export default router;