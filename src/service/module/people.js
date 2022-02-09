import apiClient from "../http-common";
import ChangeUrl from "../ChangeUrl"

export default {
  async listPeople(page = 1) {
    let dataGroupes = ["films","homeworld","vehicles","starships","species"]
    let data = await apiClient.get("/people/?page=" + page)
    data.data["results"]=await ChangeUrl.multiplesUrlToIdAndName(data.data["results"],dataGroupes)
    for (let i = 0 ; i < data.data.results.length;i++){
      data.data.results[i]["name"]=data.data.results[i]["name"].toLowerCase()
    }
    return data;
  },

  async getPeopleById(id) {
    let dataGroupes = ["films","homeworld","vehicles","starships","species"]
    let data = await apiClient.get("/people/" + id)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data,dataGroupes)
    data.data.results["name"]=data.data.results["name"].toLowerCase()
    return data;
  },

  async searchPeople(searchInput) {
    let dataGroupes = ["films","homeworld","vehicles","starships","species"]
    let data = await apiClient.get("/people/?search=" + searchInput)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data["results"][0],dataGroupes)
    data.data.results["name"]=data.data.results["name"].toLowerCase()
    return data;
  },
};
