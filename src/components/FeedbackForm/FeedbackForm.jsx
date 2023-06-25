import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './FeedbackForm.form';
import { Comment } from '../../api'

const commentController = new Comment();

const FeedbackForm = ({ onClose, onReload, language, setFirstLoad }) => {

    const [lblnombre, setLblNombre] = useState('Nombre');
    const [lblurlFoto, setLblUrlFoto] = useState('URL de la foto');
    const [lblcorreo, setLblCorreo] = useState('Correo');
    const [lblcomentario, setLblComentario] = useState('Comentario');
    const [lblcalificacion, setLblCalificacion] = useState('Puntuación');
    const [lblempresa, setLblEmpresa] = useState('Empresa');
    const [lblpuesto, setLblPuesto] = useState('Puesto');
    const [lblurl, setLblUrl] = useState('Url a Red social');
    const [lblterm, setLblTerm] = useState('Acepto los términos y condiciones');


    useEffect(() => {
        setLblNombre(language !== 'en' ? 'Name' : 'Nombre');
        setLblUrlFoto(language !== 'en' ? 'Photo URL' : 'URL de la foto');
        setLblCorreo(language !== 'en' ? 'Email' : 'Correo');
        setLblComentario(language !== 'en' ? 'Comment' : 'Comentario');
        setLblCalificacion(language !== 'en' ? 'Rating' : 'Puntuación');
        setLblEmpresa(language !== 'en' ? 'Company' : 'Empresa');
        setLblPuesto(language !== 'en' ? 'Position' : 'Puesto');
        setLblUrl(language !== 'en' ? 'Social Media URL' : 'Url a Red social');
        setLblTerm(language !== 'en' ? 'I accept the terms and conditions' : 'Acepto los términos y condiciones');

    }, [language])

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(language),
        validateOnChange: false,
        onSubmit: async (formValues) => {
            try {
                console.log(formValues);
                const form = await commentController.comentario(formValues);
                console.log(form);
                setFirstLoad(true);
                onReload();
                onClose();
            } catch (error) {
                console.error(error);
            }
        },
    });
    return (
        <Form onSubmit={formik.handleSubmit}>
            <label>{lblnombre}:</label>
            <Form.Input
                name="nombre"
                placeholder={lblnombre}
                onChange={formik.handleChange}
                value={formik.values.nombre}
                error={formik.errors.nombre}
            />
            <label>{lblurlFoto}:</label>
            <Form.Input
                name="fotoUrl"
                placeholder={lblurlFoto}
                onChange={formik.handleChange}
                value={formik.values.fotoUrl}
                error={formik.errors.fotoUrl}
            />
            <label>{lblcorreo}:</label>
            <Form.Input
                name="correo"
                placeholder={lblcorreo}
                onChange={formik.handleChange}
                value={formik.values.correo}
                error={formik.errors.correo}
            />
            <label>{lblcomentario}:</label>
            <Form.TextArea
                name="comentario"
                placeholder={lblcomentario}
                onChange={formik.handleChange}
                value={formik.values.comentario}
                error={formik.errors.comentario}
            />
            <label>{lblcalificacion}:</label>
            <Form.Input
                style={{ width: "200px" }}
                type="number"
                name="calificacion"
                placeholder={language !== 'en' ? "Score from 1 to 5" : "Puntuación del 1 al 5"}
                onChange={formik.handleChange}
                value={formik.values.calificacion}
                error={formik.errors.calificacion}
            />
            <label>{lblempresa}:</label>
            <Form.Input
                name="empresa"
                placeholder={lblempresa}
                onChange={formik.handleChange}
                value={formik.values.empresa}
                error={formik.errors.empresa}
            />
            <label>{lblpuesto}:</label>
            <Form.Input
                name="puesto"
                placeholder={lblpuesto}
                onChange={formik.handleChange}
                value={formik.values.puesto}
                error={formik.errors.puesto}
            />
            <label>{lblurl}:</label>
            <Form.Input
                name="url"
                type="url"
                placeholder={lblurl}
                onChange={formik.handleChange}
                value={formik.values.url}
                error={formik.errors.url}
            />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Checkbox
                    name="consentimiento"
                    onChange={(_, { checked }) =>
                        formik.setFieldValue("consentimiento", checked)
                    }
                    checked={formik.values.consentimiento}
                    error={formik.errors.consentimiento}
                />
                <label style={{ marginLeft: '8px', marginBottom: '15px' }}>{lblterm}</label>
            </div>
            <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
                {language !== 'en' ? 'Accept' : 'Aceptar'}
            </Form.Button>
        </Form>
    );

}

export default FeedbackForm;
