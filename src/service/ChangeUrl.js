import axios from "axios";
import apiClient from "./http-common";

export default {

  async multiplesUrlToIdAndName(data,dataGroupes){
    data.forEach(async (item,index)=>{
      data[index] = await this.urlToIdAndName(item,dataGroupes);
    });
    return data;
  },

  async urlToIdAndName(data,dataGroupes){
    dataGroupes.forEach(async dataGroupe => {
      
      if (dataGroupe==="homeworld"){
        if (data[dataGroupe]!=null){
          const dict = {};
            if (data[dataGroupe][data[dataGroupe].length-3]=="/"){
              dict["id"] = parseInt(data[dataGroupe][data[dataGroupe].length-2]);
            }else{
              dict["id"] = parseInt(data[dataGroupe].substr(data[dataGroupe].length-3,data[dataGroupe].length-2));
            }
            let responses = await apiClient.get(data[dataGroupe].substr(21,data[dataGroupe].length-1));
            dict["name"] = responses.data["name"].toLowerCase();
            data[dataGroupe]=dict;
        }

      }else{
        axios.all(data[dataGroupe].map((endpoint) => axios.get(endpoint))).then(axios.spread((...responses) => {

          for (let i =0 ; i < data[dataGroupe].length ; i++){

            let nameType = "name";
            if (dataGroupe === "films"){
              nameType= "title";
            }
            const dict = {};
            if (data[dataGroupe][i][data[dataGroupe][i].length-3]=="/"){
              dict["id"] = parseInt(data[dataGroupe][i][data[dataGroupe][i].length-2]);
            }else{
              dict["id"] = parseInt(data[dataGroupe][i].substr(data[dataGroupe][i].length-3,data[dataGroupe][i].length-2));
            }
            dict[nameType] = responses[i].data[nameType].toLowerCase();
            data[dataGroupe][i]=dict;

          }
        }))
      }
      
    });
    return data;
  },
};
