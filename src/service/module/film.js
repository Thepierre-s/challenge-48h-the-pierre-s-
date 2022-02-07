import apiClient from "../http-common";

export default {
  async listFilm() {
    return await apiClient.get("/films/");
  },

  async getFilmById(id) {
    return await apiClient.get("/films/" + id);
  },

  async searchFilm(searchInput) {
    return await apiClient.get("/films/?search=" + searchInput);
  },
};
