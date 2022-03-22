const Pratique = require('../models/pratiqueModel');

exports.createPratique = (req, res) => {
    const pratique = new Pratique(req.body);

    pratique.save()
    .then((pratique) => {
        return res.status(201).json({pratique})
    })
    .catch((error) => {return res.status(400).json({error}) });
}

exports.getAllPratique = (req, res) => {
    Pratique.find()
    .then((pratiques) => { return res.status(200).json({pratiques})})
    .catch((error) => { return res.status(400).json({error})});
}

exports.getOnePratiqueById = (req, res) => {
    const idPratique = req.params.id;

    Pratique.findOne({_id: idPratique})
    .then((pratique) => { return res.status(200).json({pratique})})
    .catch((error) => { return res.status(400).json({error})});
}

exports.getPratiquesByUserid = (req, res) => {
    const idUser = req.params.userId;

    Pratique.find({idUser: idUser})
    .then((pratique) => { return res.status(200).json({pratique})})
    .catch((error) => { return res.status(400).json({error})});
}

exports.getPratiquesBySport = (req, res) => {
    const idSport = req.params.idSport;

    Pratique.find({idSport: idSport})
    .then((pratique) => { return res.status(200).json({pratique})})
    .catch((error) => { return res.status(400).json({error})});
}

exports.getPratiquesByNiveau = (req, res) => {
    const idNiveau = req.params.niveau;

    Pratique.find({niveau: idNiveau})
    .then((pratique) => { return res.status(200).json({pratique})})
    .catch((error) => { return res.status(400).json({error})});
}

exports.putPratique = (req, res) => {
    const id = req.params.id;

    Pratique.findOne({_id: id})
    .then ((pratique) => { 
        pratique.idSport = req.body.idSport,
        pratique.idUser = req.body.idUser,
        pratique.niveau = req.body.niveau,
        pratique.avis = req.body.avis
        pratique.save()
        .then((pratique) => {
            return res.status(200).json({pratique});
        })
        .catch((error) => {
            return res.status(400).json ( {error} );
        });
    })
    .catch((error) => { return res.status(400).json( {error} )});
};

exports.delPratique = (req, res) => {
    const id = req.params.id;

    Pratique.deleteOne({_id: id})
    .then((pratique) => { return res.status(200).json( {pratique} )})
    .catch((error) => { return res.status(400).json( {error} )});
};
