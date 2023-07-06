import caloriesIcon from "../../assets/images/calories-icon.png"
import proteinIcon from "../../assets/images/protein-icon.png"
import carbsIcon from "../../assets/images/carbs-icon.png"
import fatIcon from "../../assets/images/fat-icon.png"
import { ISPROD, MOCK_DATA , PROD_BASEURL } from "../../env.js"



class Api {

    constructor(baseUrl,mockData,isProd){
        isProd ? this.baseUrl = baseUrl : this.mockData = mockData
        this.isProd = isProd
    }

    getUser = async (id) => {
        if(this.isProd){

          const response = await fetch(`${this.baseUrl}/user/${id}`)
          return await response.json()

        }else{

          return this.mockData[id/6 - 2].user

        }
  }

    getDailyActivity = async (id) => { 

      if(this.isProd){

        const response = await fetch(`${this.baseUrl}/user/${id}/activity`)
        return await response.json()

      }else{

        return this.mockData[id/6-2].activity

      }

    }
    
    getAverageSessions = async (id) => {

      if(this.isProd){

        const response = await fetch(`${this.baseUrl}/user/${id}/average-sessions`)
        return await response.json()

      }else{

        return this.mockData[id/6-2].averageSessions

      }

     }

    getPerformance = async (id) => { 

      if(this.isProd){

        const response = await fetch(`${this.baseUrl}/user/${id}/performance`)
        return await response.json()

      }else{

        return this.mockData[id/6-2].performance

      }

    }

  }


class ApiFormatter{

  constructor(isProd){
    isProd ? this.api = new Api(PROD_BASEURL,null,isProd) : this.api = new Api(null,MOCK_DATA,isProd);
  }
  
  users = async (ids) => {
    let result = []
    for (const id of ids){
      const data = await this.api.getUser(id)
      result.push({id : data.data.id, firstName : data.data.userInfos.firstName, lastName : data.data.userInfos.lastName})
    }

    return result
  }

  userFirstName = async (id) => {
    
    const data = await this.api.getUser(id)
    return data.data.userInfos.firstName

  }

  userDailyActivity = async (id) => { 
    //let result = []
    let data = await this.api.getDailyActivity(id)
    for (let i = 0; i < data.data.sessions.length; i++){
      data.data.sessions[i].day = i + 1
      //result.push({day : i, kilogram : data.data.sessions[i-1].kilogram, calories : data.data.sessions[i-1].calories})     
    }

    return data.data.sessions
  }

  userMacroNutriments = async (id) => { 
    
    const data = await this.api.getUser(id)

    return [
    {category : "Calories", value : data.data.keyData.calorieCount, iconUrl : caloriesIcon},
    {category : "Protéines", value : data.data.keyData.proteinCount, iconUrl : proteinIcon},
    {category : "Glucides", value : data.data.keyData.carbohydrateCount, iconUrl : carbsIcon},
    {category : "Lipides", value : data.data.keyData.lipidCount, iconUrl : fatIcon}
    ]

  }

  userScore = async (id) => {
    
    const data = await this.api.getUser(id)
    
    if(id === "18"){ 
      return [{value: data.data.score} , {value: 1 - data.data.score}]
    }else{
      return [{value: data.data.todayScore} , {value: 1 - data.data.todayScore}]
    }
  } 

  userAverageSessions = async (id) => {
    const days = ["L","M","M","J","V","S","D"]
    let data = await this.api.getAverageSessions(id)

    for (let i = 0; i < data.data.sessions.length; i++){
      data.data.sessions[i].day = days[i]   
    }

    return data.data.sessions
  }

  userPerformance = async (id) => {

    const categories = ["Cardio","Energie","Endurance","Force","Vitesse","Intensité"]
    let data = await this.api.getPerformance(id)

    for (let i = 0; i < data.data.data.length; i++){
      data.data.data[i].kind = categories[i]
    }

    return data.data.data.reverse()
  }

}
// eslint-disable-next-line import/no-anonymous-default-export
export default new ApiFormatter(ISPROD)