import apiClient from "../http-common";

export default {
  async listStarship(page = 1) {
    return await apiClient.get("/starships/?page=" + page);
  },

  async getStarshipById(id) {
    return await apiClient.get("/Ssarships/" + id);
  },

  async searchStarship(searchInput) {
    return await apiClient.get("/starships/?search=" + searchInput);
  },
};
