
var express = require('express');
var router = express.Router();
var blogModel=require('../../models/blog')

/* GET http://localhost:3000/api/blogs */
  router.get('/', async (req, res) => {
    console.log('--------dentro de GET http://localhost:3000/api/blogs-------------');

    try {
      const [rows] = await blogModel.getAll_Blogs();
      res.json(rows);
    } catch (err) {
      res.json({ error: err.message });
    }
  });

/* POST http://localhost:3000/api/blogs */

  router.post('/', (req, res) => {
    console.log('--------dentro de POST http://localhost:3000/api/blogs -------------');

    blogModel.create_Blogs(req.body)
    .then(([result]) => res.json(result))
    .catch(err => res.json({ error: err.message }));
    });

module.exports = router;
