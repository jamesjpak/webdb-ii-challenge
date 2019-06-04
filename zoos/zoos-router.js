const knex = require("knex");
const knexConfig = {
    client: "sqlite3",
    connection: {
        filename: "./data/lambda.db3"
    },
    useNullAsDefault: true,
    debug: true
}
const db = knex(knexConfig);

const router = require("express").Router();

const Zoos = require("./zoos-model");

router.get("/", (req, res) => {
  Zoos.find()
    .then(zoos => {
      res.status(200).json(zoos);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
    Zoos.findById(req.params.id)
    //  db('zoos')
    // .where({ id: req.params.id})
    // .first()
    .then(zoo => {
      if (zoo) {
        res.status(200).json(zoo);
      } else {
          res.status(404).json({ message: 'Record not found' })
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/", (req, res) => {
    
    Zoos.add(req.body, "id")
    // db("zoos")
    // .insert(req.body, "id")
    .then(zoo => {
        res.status(201).json(zoo)
    }) 
    .catch(error => {
        res.status(500).json(error)
    })
})

router.put("/:id", (req, res) => {
    Zoos.update(req.params.id, req.body)
    // const changes = req.body;
    //  db('zoos')
    // .where({ id: req.params.id })
    // .update(changes)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: `${count} records updated` })
        } else {
            res.status(404).json({ message: 'Zoo not found!'})
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

router.delete("/:id", (req, res) => {
    db('zoos')
    .where({ id: req.params.id })
    .del() 
    .then(count => {
        if (count > 0) {
            const message = count > 1 ? `records` : 'record'
            res.status(200).json({ message: `${count} ${unit} deleted` })
        } else {
            res.status(404).json({ message: 'Zoo not found!' })
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router;
