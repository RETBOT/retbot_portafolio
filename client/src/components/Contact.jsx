import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ENVMAIL } from '../constants/env_mail'

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = ({ language }) => {

  const [msgEnviado, setMsgEnviado] = useState('Gracias. Me pondré en contacto contigo lo antes posible.');
  const [msgError, setMsgError] = useState('Ahh, algo salió mal. Por favor, inténtalo de nuevo.');
  const [titulo, setTitulo] = useState('Ponerse en contacto');
  const [subTitulo, setSubTitulo] = useState('Contacto.');
  const [lblNombre, setLblNombre] = useState('Tu nombre');
  const [phNombre, setPhNombre] = useState('¿Cuál es tu nombre?');
  const [lblCorreo, setLblCorreo] = useState('Tu correo');
  const [phCorreo, setPhCorreo] = useState('¿Cuál es tu nombre?');

  const [lblMensaje, setLblMensaje] = useState('Tu mensaje');
  const [phMensaje, setPhMensaje] = useState('¿Qué quieres decir?');

  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        ENVMAIL.VITE_APP_EMAILJS_SERVICE_ID,
        ENVMAIL.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Roberto Esquivel",
          from_email: form.email,
          to_email: "robertoesquiveltr16@gmail.com",
          message: form.message,
        },
        ENVMAIL.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false); // modif
          alert(msgEnviado);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(msgError);
        }
      );
  };

  useEffect(() => {
    setMsgEnviado(language !== 'en' ? 'Thank you. I will get back to you as soon as possible.' : 'Gracias. Me pondré en contacto contigo lo antes posible.');
    setMsgError(language !== 'en' ? 'Ahh, something went wrong. Please try again.' : 'Ahh, algo salió mal. Por favor, inténtalo de nuevo.');
    setTitulo(language !== 'en' ? 'Get in touch' : 'Ponerse en contacto');
    setSubTitulo(language !== 'en' ? 'Contact.' : 'Contacto.');
    setLblNombre(language !== 'en' ? 'Your Name' : 'Tu nombre');
    setPhNombre(language !== 'en' ? `What's your good name?` : '¿Cuál es tu nombre?');
    setLblCorreo(language !== 'en' ? 'Your email' : 'Tu correo');
    setPhCorreo(language !== 'en' ? `What is your email address?` : '¿Cuál es tu correo electrónico?');
    setLblMensaje(language !== 'en' ? 'Your Message' : 'Tu mensaje');
    setPhMensaje(language !== 'en' ? `What you want to say?` : '¿Qué quieres decir?');

  }, [language]);

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-4 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>{titulo}</p>
        <h3 className={styles.sectionHeadText}>{subTitulo}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{lblNombre}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={phNombre}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{lblCorreo}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={phCorreo}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{lblMensaje}</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={phMensaje}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {language !== 'en' ? (loading ? "Sending..." : "Send") : (loading ? "Enviando..." : "Enviar")}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
