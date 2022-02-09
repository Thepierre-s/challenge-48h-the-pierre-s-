import { data } from "autoprefixer";
import apiClient from "../http-common";
import ChangeUrl from "../ChangeUrl"

export default {

  async listPlanet(page = 1) {
    let dataGroupes = ["films","residents"]
    let data = await apiClient.get("/planets/?page=" + page)
    data.data["results"]=await ChangeUrl.multiplesUrlToIdAndName(data.data["results"],dataGroupes)
    for (let i = 0 ; i < data.data.results.length;i++){
      data.data.results[i]["name"]=data.data.results[i]["name"].toLowerCase()
    }
    return data;
  },

  async getPlanetById(id) {
    let dataGroupes = ["films","residents"]
    let data = await apiClient.get("/planets/" + id)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data,dataGroupes)
    data.data.results["name"]=data.data.results["name"].toLowerCase()
    return data;
  },

  async searchPlanet(searchInput) {
    let dataGroupes = ["films","residents"]
    let data = await apiClient.get("/planets/?search=" + searchInput)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data["results"][0],dataGroupes)
    data.data.results["name"]=data.data.results["name"].toLowerCase()
    return data;
  },
};
