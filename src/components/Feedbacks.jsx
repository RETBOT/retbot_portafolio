import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Button } from 'semantic-ui-react';
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FaStar } from "react-icons/fa";
import { Comment } from "../api/comentario";

import { FeedbackForm } from './FeedbackForm'
import { BasicModal } from './Shared'

const commentController = new Comment();

const FeedbackCard = ({
  index,
  calificacion,
  comentario,
  consentimiento,
  empresa,
  fecha,
  fotoUrl,
  correo,
  nombre,
  puesto,
  url,
  language,
}) => {
  const renderStarIcons = () => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      const starIcon =
        i <= Math.round(calificacion) ? (
          <FaStar key={i} className="text-yellow-500" />
        ) : (
          <FaStar key={i} className="text-gray-300" />
        );

      stars.push(starIcon);
    }

    return stars;
  };

  const [usuario, setUsuario] = useState('Usuario');
  const [comments, setComments] = useState('Comentario');
  const [star, setStar] = useState('estrellas');
  const [date, setDate] = useState('Fecha');

  useEffect(() => {
    setUsuario(language !== 'en' ? 'User' : 'Usuario');
    setComments(language !== 'en' ? 'Comment' : 'Comentario');
    setStar(language !== 'en' ? 'stars' : 'estrellas');
    setDate(language !== 'en' ? 'Date' : 'Fecha');
  }, [language]);

  const formattedDate = (fecha) => fecha.split('T')[0];

  const renderUserName = () => {
    if (url && nombre) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-white font-bold">
          {usuario + ': ' + nombre}
        </a>
      );
    } else {
      return <p className="text-white font-bold">{usuario + ': ' + nombre}</p>;
    }
  };

  return (
    <div className="bg-tertiary p-6 rounded-lg shadow-lg">
      <p className="text-white text-lg font-semibold mb-4">{comments + ': ' + comentario}</p>

      <div className="flex items-center">
        {fotoUrl && (
          <img
            src={fotoUrl}
            alt="Foto"
            className="w-10 h-10 rounded-full mr-4 flex-shrink-0"
          />
        )}
        <div>
          {renderUserName()}
          <p className="text-gray-300 text-sm">
            {empresa} - {puesto}
          </p>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <div className="flex">
          {renderStarIcons()}
        </div>
        <p className="ml-2 text-gray-300 text-sm">
          {Math.round(calificacion) + ' ' + star}
        </p>
      </div>

      <p className="text-gray-400 text-sm mt-2">
        {date + ': ' + formattedDate(fecha)}
      </p>
    </div>
  );
};

const Feedbacks = ({ language }) => {

  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);

  const [paginacion, setPaginacion] = useState(null);
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  const [titulo, setTitulo] = useState('Lo que otros dicen');
  const [subTitulo, setSubTitulo] = useState('Comentarios');
  const [newComentario, setNewComentario] = useState('Nuevo Comentario');
  const [btnVer, setBtnVer] = useState('Ver más');

  const fetchComments = async () => {
    try {
      const response = await commentController.getComments(page);
      if (firstLoad) {
        setFirstLoad(false);
        setComments(response.docs);
      } else {
        setComments((prevComments) => prevComments.concat(response.docs));
      }


      setPaginacion({
        limit: response.limit,
        page: response.page,
        pages: response.pages,
        total: response.total,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [page, reload]);

  useEffect(() => {
    setTitulo(language !== 'en' ? 'What others say' : 'Lo que otros dicen');
    setSubTitulo(language !== 'en' ? 'Comments' : 'Comentarios');
    setNewComentario(language !== 'en' ? 'New Comment' : 'Nuevo Comentario');
    setBtnVer(language !== 'en' ? 'See more' : 'Ver más');
  }, [language])

  const clickNextPage = () => {
    setPage((prevValue) => prevValue + 1);
  };

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onReload = () => setReload((prevState) => !prevState);

  return (
    <>
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding2} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>{titulo}</p>
            <h2 className={styles.sectionHeadText}>{subTitulo}.</h2>
          </motion.div>
          <div className="flex justify-end" style={{ color: "#ffffff" }}>
            <Button
              className="bg-violet-500 text-white px-4 py-2 rounded-lg"
              style={{ fontSize: '16px', fontWeight: 'bold', color: "#151030" }}
              onClick={onOpenCloseModal}
            >
              {newComentario}
            </Button>
          </div>
        </div>
        <div className={`mt-20 ${styles.padding2} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 justify-center`}>
          {comments.map((comment, index) => (
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <FeedbackCard key={comment._id} index={index} language={language} {...comment} />
              </div>
            </div>
          ))}
        </div>

        {(paginacion?.page <= paginacion?.pages && comments.length > 3) ? (<div className="flex justify-end px-4	py-4" style={{ color: "#ffffff" }}>
          <Button
            className="bg-violet-500 text-white px-4 py-2 rounded-lg"
            style={{ fontSize: '16px', fontWeight: 'bold', color: "#151030" }}
            onClick={() => clickNextPage()}
          >
            {btnVer}
          </Button>
        </div>) : (<></>)}
      </div>

      <BasicModal show={showModal} close={onOpenCloseModal} title={language !== 'en' ? 'New Comment' : 'Nuevo Comentario'}>
        <FeedbackForm onClose={onOpenCloseModal} onReload={onReload} setFirstLoad={setFirstLoad} language={language} />
      </BasicModal>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
