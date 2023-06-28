const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ComentarioShema = mongoose.Schema({
    nombre: String,
    fotoUrl: String,
    correo: String,
    comentario: String,
    calificacion: Number,
    empresa: String,
    puesto: String,
    url: String,
    fecha: Date,
    consentimiento: Boolean,
});

ComentarioShema.plugin(mongoosePaginate);

module.exports = mongoose.model("Comentario", ComentarioShema);