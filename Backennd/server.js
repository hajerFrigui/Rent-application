const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const Annonce = require("./models/annonce");

/*connection to the database deja cree*/
mongoose
  .connect("mongodb://localhost/rentApp")
  .then(() => console.log("mongodb connected ..."))
  .catch(err => console.log(err));

/*converter the body to format json*/
app.use(bodyparser.json());

app.post("/addAnnonce", (req, res, next) => {
  const annonce = new Annonce({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    price: req.body.price,
    img: req.body.img,
    type: req.body.type,
    category: req.body.category,
    rented: req.body.rented,
    numero: req.body.numero,
    adress: req.body.adress,
    disponibility: req.body.disponibility
  });
  /*store in the database*/
  annonce
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "addAnnonce",
        annonce
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

app.get("/getAnnonce/:annonceId", (req, res, next) => {
  const id = req.params.annonceId;
  Annonce.findById(id)
    .exec()
    .then(doc => {
      console.log("from database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: "Not Found for the provided Id"
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

app.get("/getAllAnnonces", (req, res, next) => {
  Annonce.find()
    .exec()
    .then(docs => {
      if (docs.length >= 0) {
        console.log("from database:", docs);
        res.status(200).json(docs);
      } else
        res.status(404).json({
          message: "there is no annonces"
        });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

app.delete("/deleteAnnonce/:AnnonceId", (req, res, next) => {
  const id = req.params.AnnonceId;
  Annonce.remove({ _id: id })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

app.patch("/updateAnnonce/:idremoved", (req, res, next) => {
  idRemoved = req.params.idremoved;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Annonce.update({ _id: idRemoved }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

/*create server*/
app.listen(3007, err => {
  if (err) console.log("server err");
  else console.log("server is runing");
});
