/* eslint-disable function-paren-newline */
const express = require('express');

const fitMixrController = require('../controllers/fitMixrController');

const router = express.Router();

router.post('/test', fitMixrController.testPost, (req, res) => res.status(200).json({}));

router.post('/addUser', fitMixrController.addUser, (req, res) => res.status(200).json({}));

// router.get('/',
//   starWarsController.getCharacters,
//   (req, res) => res.status(200).json([...res.locals])
// );

// router.get('/species',
//   starWarsController.getSpecies,
//   (req, res) => res.status(200).json({})
// );

// router.get('/homeworld',
//   starWarsController.getHomeworld,
//   (req, res) => res.status(200).json({})
// );

// router.get('/film',
//   starWarsController.getFilm,
//   (req, res) => res.status(200).json({})
// );

// router.post('/character',
//   starWarsController.addCharacter,
//   (req, res) => res.status(200).json({})
// );

module.exports = router;
