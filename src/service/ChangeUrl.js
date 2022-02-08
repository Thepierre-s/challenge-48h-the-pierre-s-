import apiClient from "./http-common";

export default {

  async IdAndName(data, dataGroupe){
    let nameType = "name"
    if (dataGroupe === "films"){
      nameType= "title"
    }
    const dict = {};
    if (data[data.length-3]=="/"){
      dict["id"] = parseInt(data[data.length-2]);
    }else{
      dict["id"] = parseInt(data.substr(data.length-3,data.length-2));
    }
    let name = await apiClient.get(data.substr(21,data.length-1));
    dict[nameType] = name.data[nameType];
    return dict
  },

  async multiplesUrlToIdAndName(data,dataGroupes){
    await data.forEach(async (item,index)=>{
      data[index] = await this.urlToIdAndName(item,dataGroupes);
    });
    return await data;
  },

  async urlToIdAndName(data,dataGroupes){
    await dataGroupes.forEach(async dataGroupe => {
      
      if (dataGroupe==="homeworld"){
        if (data[dataGroupe]!=null){
          data[dataGroupe] = await this.IdAndName(data[dataGroupe],dataGroupe);
        }

      }else{
        await data[dataGroupe].forEach(async (item , index) => {
          data[dataGroupe][index] = await this.IdAndName(data[dataGroupe][index],dataGroupe);
        });
      }
    });
    return await data;
  },
};
