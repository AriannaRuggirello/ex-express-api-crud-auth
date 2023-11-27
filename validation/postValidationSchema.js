
const { body } = require('express-validator');

const postValidationSchema = {
    title: body('title')
    .isLength({ min: 1 })
    .withMessage('Il campo titolo non può essere vuoto'),

    content: body('content')
    .isLength({ min: 1 })
    .withMessage('Il campo contenuto non può essere vuoto'),

    image: body('image').optional().isURL().withMessage('Il campo immagine deve essere un URL valido'),
    };

module.exports = postValidationSchema;
