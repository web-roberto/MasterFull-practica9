var express = require('express');
var router = express.Router();
var autorModel=require('../../models/autor')

/* GET http://localhost:3000/api/autores */
  router.get('/', async (req, res) => {
    console.log('--------dentro de GET http://localhost:3000/api/autores-------------');
    try {
      const [rows] = await autorModel.getAll_Autores();
      res.json(rows);
    } catch (err) {
      res.json({ error: err.message });
    }
  });
  /* GET http://localhost:3000/api/autores/posts/1 */
  router.get('/posts/:autorId', async (req, res) => {
    console.log('--------dentro de GET http://localhost:3000/api/autores/posts/1 -------req.params.autorId------',req.params.autorId);
    try {
      const [rows] = await autorModel.getAll_PostsOfAutor(req.params.autorId);
      console.log(rows);
      res.json(rows);
    } catch (err) {
      res.json({ error: err.message });
    }
  });

/* POST http://localhost:3000/api/autores */

  router.post('/', (req, res) => {
    console.log('--------dentro de POST http://localhost:3000/api/autores-------------');
    autorModel.create_Autores(req.body)
    .then(([result]) => res.json(result))
    .catch(err => res.json({ error: err.message }));
    });

module.exports = router;
