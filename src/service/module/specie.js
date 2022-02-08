import { data } from "autoprefixer";
import apiClient from "../http-common";
import ChangeUrl from "../ChangeUrl"

export default {

  async listSpecie(page = 1) {
    let dataGroupes = ["films","homeworld","people"]
    let data = await apiClient.get("/species/?page=" + page)
    data.data["results"]=await ChangeUrl.multiplesUrlToIdAndName(data.data["results"],dataGroupes)
    return data;
  },

  async getSpecieById(id) {
    let dataGroupes = ["films","homeworld","people"]
    let data = await apiClient.get("/species/" + id)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data,dataGroupes)
    return data;
  },

  async searchSpecie(searchInput) {
    let dataGroupes = ["films","homeworld","people"]
    let data = await apiClient.get("/species/?search=" + searchInput)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data["results"][0],dataGroupes)
    return data;
  },
};
