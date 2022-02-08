import apiClient from "../http-common";
import ChangeUrl from "../ChangeUrl"

export default {
  async listFilm() {
    let dataGroupes = ["characters","planets","starships","vehicles","species"]
    let data = await apiClient.get("/films/")
    data.data["results"]=await ChangeUrl.multiplesUrlToIdAndName(data.data["results"],dataGroupes)
    return data;
  },

  async getFilmById(id) {
    let dataGroupes = ["characters","planets","starships","vehicles","species"]
    let data = await apiClient.get("/films/" + id)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data,dataGroupes)
    return data;
  },

  async searchFilm(searchInput) {
    let dataGroupes = ["characters","planets","starships","vehicles","species"]
    let data = await apiClient.get("/films/?search=" + searchInput)
    data.data["results"]=await ChangeUrl.urlToIdAndName(data.data["results"][0],dataGroupes)
    return data;
  },
};
