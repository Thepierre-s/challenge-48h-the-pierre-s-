import apiClient from "../http-common";
import ChangeUrl from "../ChangeUrl"

export default {
  async listStarship(page = 1) {
    let dataGroupes = ["films","pilots"]
    let data = await apiClient.get("/starships/?page=" + page)
    data.data["results"]=await ChangeUrl.multiplesUrlToIdAndName(data.data["results"],dataGroupes)
    return data;
  },

  async getStarshipById(id) {
    let dataGroupes = ["films","pilots"]
    let data = await apiClient.get("/starships/" + id)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data,dataGroupes)
    return data;
  },

  async searchStarship(searchInput) {
    let dataGroupes = ["films","pilots"]
    let data = await apiClient.get("/starships/?search=" + searchInput)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data["results"][0],dataGroupes)
    return data;
  },
};
