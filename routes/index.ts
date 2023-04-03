import express, {Express, Request, Response} from "express";

const router = express.Router();


console.log('lol')
/* GET home page. */
router.get('/', function(req: Request, res: Response, next) {
  res.render('index', { title: 'Express' });
});

export default router;
