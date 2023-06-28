const express = require("express");
const CommentController = require("../controllers/comentarios");

const api = express.Router();

// Router
// Crear comentario
api.post("/comentario", CommentController.createComment);

// Obtener comentarios
api.get("/comentarios", CommentController.getComments);


module.exports = api;