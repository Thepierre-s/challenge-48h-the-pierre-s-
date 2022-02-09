import apiClient from "../http-common";
import ChangeUrl from "../ChangeUrl"

export default {
  async listVehicle(page = 1) {
    let dataGroupes = ["films","pilots"]
    let data = await apiClient.get("/vehicles/?page=" + page)
    data.data["results"]=await ChangeUrl.multiplesUrlToIdAndName(data.data["results"],dataGroupes)
    for (let i = 0 ; i < data.data.results.length;i++){
      data.data.results[i]["name"]=data.data.results[i]["name"].toLowerCase()
    }
    return data;
  },

  async getVehicleById(id) {
    let dataGroupes = ["films","pilots"]
    let data = await apiClient.get("/vehicles/" + id)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data,dataGroupes)
    data.data.results["name"]=data.data.results["name"].toLowerCase()
    return data;
  },

  async searchVehicle(searchInput) {
    let dataGroupes = ["films","pilots"]
    let data = await apiClient.get("/vehicles/?search=" + searchInput)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data["results"][0],dataGroupes)
    data.data.results["name"]=data.data.results["name"].toLowerCase()
    return data;
  },
};
