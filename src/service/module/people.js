import apiClient from "../http-common";
import ChangeUrl from "../ChangeUrl"

export default {
  async listPeople(page = 1) {
    let dataGroupes = ["films","homeworld","vehicles","starships","species"]
    let data = await apiClient.get("/people/?page=" + page)
    data.data["results"]=await ChangeUrl.multiplesUrlToIdAndName(data.data["results"],dataGroupes)
    return data;
  },

  async getPeopleById(id) {
    let dataGroupes = ["films","homeworld","vehicles","starships","species"]
    let data = await apiClient.get("/people/" + id)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data,dataGroupes)
    return data;
  },

  async searchPeople(searchInput) {
    let dataGroupes = ["films","homeworld","vehicles","starships","species"]
    let data = await apiClient.get("/people/?search=" + searchInput)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data["results"][0],dataGroupes)
    return data;
  },
};
