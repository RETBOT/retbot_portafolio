import { ENV } from "../constants/constants";

export class Comment {
  baseApi = ENV.BASE_API;

  async comentario(data) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.COMENTARIO}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: data.nombre,
          fotoUrl: data.fotoUrl,
          correo: data.correo,
          comentario: data.comentario,
          calificacion: data.calificacion,
          empresa: data.empresa,
          puesto: data.puesto,
          url: data.url,
          consentimiento: data.consentimiento,
        }),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getComments(page = 1, limit = 3) {
    try {
      const pageFilter = `page=${page}`;
      const limitFilter = `limit=${limit}`;
      const url = `${this.baseApi}/${ENV.API_ROUTES.COMENTARIOS}?${pageFilter}&${limitFilter}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

}