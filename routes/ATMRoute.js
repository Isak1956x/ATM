import express from 'express';
import calculateByMode from './../utils/helpers/hbs/calculateByMode.js';
const router = express.Router();
import validate from '../utils/helpers/hbs/validation.js';

router.get('/', (req, res) => {
    res.status(200).render('ATM/index', {layout: false, title: 'ATM'});
});

router.get('/atm', (req, res) => {
  res.redirect('/');
});

router.post('/atm', (req, res) => {
    const validation = validate(req.body.amount, parseInt(req.body.mode));
    if (!validation.Success)
    {
        return res.status(200).render('ATM/index', {layout: false, title: 'ATM', error: validation.error});
    }
   
    res.status(200).render('ATM/results', {layout: false, title: 'ATM Results', result: calculateByMode(parseInt(req.body.amount), parseInt(req.body.mode))});
});

export default router;