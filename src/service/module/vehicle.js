import apiClient from "../http-common";
import ChangeUrl from "../ChangeUrl"

export default {
  async listVehicle(page = 1) {
    let dataGroupes = ["films","pilots"]
    let data = await apiClient.get("/vehicles/?page=" + page)
    data.data["results"]=await ChangeUrl.multiplesUrlToIdAndName(data.data["results"],dataGroupes)
    return data;
  },

  async getVehicleById(id) {
    let dataGroupes = ["films","pilots"]
    let data = await apiClient.get("/vehicles/" + id)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data,dataGroupes)
    return data;
  },

  async searchVehicle(searchInput) {
    let dataGroupes = ["films","pilots"]
    let data = await apiClient.get("/vehicles/?search=" + searchInput)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data["results"][0],dataGroupes)
    return data;
  },
};
