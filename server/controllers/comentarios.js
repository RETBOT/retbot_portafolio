const Comentario = require("../models/comentario");


// Funciones
// Crear comentario
function createComment(req, res) {
    const { nombre, fotoUrl, correo, comentario, calificacion, empresa, puesto, url, consentimiento } = req.body;

    const comment = new Comentario({
        nombre,
        fotoUrl,
        correo,
        comentario,
        calificacion,
        empresa,
        puesto,
        url,
        fecha: new Date(),
        consentimiento,
    });

    comment.save()
        .then(commentStored => {
            res.status(200).send(commentStored);
        })
        .catch(error => {
            res.status(400).send({ msg: "Error al crear el comentario" });
        });
}

function getComments(req, res) {
    const { page = 1, limit = 4 } = req.query;

    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
        sort: { fecha: "desc" },
    };

    Comentario.paginate({}, options)
        .then(commentStored => {
            res.status(200).send(commentStored);
        })
        .catch(error => {
            res.status(400).send({ msg: "Error al obtener los comentarios" });
        });
}




module.exports = {
    createComment,
    getComments,
};
