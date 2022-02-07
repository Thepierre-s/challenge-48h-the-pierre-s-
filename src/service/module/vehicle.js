import apiClient from "../http-common";

export default {
  async listVehicle(page = 1) {
    return await apiClient.get("/vehicles/?page=" + page);
  },

  async getVehicleById(id) {
    return await apiClient.get("/vehicles/" + id);
  },

  async searchVehicle(searchInput) {
    return await apiClient.get("/vehicles/?search=" + searchInput);
  },
};
