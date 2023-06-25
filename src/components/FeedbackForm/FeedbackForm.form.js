import * as Yup from "yup"

export function initialValues() {
    return {
        nombre: '',
        fotoUrl: '',
        correo: '',
        comentario: '',
        calificacion: '',
        empresa: '',
        puesto: '',
        url: '',
        consentimiento: false,
    }
}

export function validationSchema(language) {
    const campo = language !== 'en' ? 'This field is required.' : 'Este campo es requerido';
    return Yup.object({
        nombre: Yup.string().required(campo),
        fotoUrl: Yup.string(),
        correo: Yup.string().email(language !== 'en' ? 'Invalid email' : 'Correo inválido').required(campo),
        comentario: Yup.string().required(campo),
        calificacion: Yup.number().required(campo).min(1, language !== 'en' ? 'The score must be greater than or equal to 1.' : 'La puntuación debe ser mayor o igual a 1.').max(5, language !== 'en' ? 'The score must be less than or equal to 5.' : 'La puntuación debe ser menor o igual a 5.'),
        empresa: Yup.string().required(campo),
        puesto: Yup.string().required(campo),
        url: Yup.string().url('URL inválida'),
        consentimiento: Yup.boolean().oneOf([true], language !== 'en' ? 'You must accept the terms and conditions' : 'Debes aceptar los términos y condiciones'),
    });
}