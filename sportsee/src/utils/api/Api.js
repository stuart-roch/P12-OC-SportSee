import caloriesIcon from "../../assets/images/calories-icon.png"
import proteinIcon from "../../assets/images/protein-icon.png"
import carbsIcon from "../../assets/images/carbs-icon.png"
import fatIcon from "../../assets/images/fat-icon.png"



class Api {

    constructor(baseUrl){
        this.baseUrl = baseUrl
    }

    getUser = (id) => { return {
      data: {
        id: 18,
        userInfos: {
          firstName: "Cecilia",
          lastName: "Ratorez",
          age: 34
        },
        score: 0.3,
        keyData: {
          calorieCount: 2500,
          proteinCount: 90,
          carbohydrateCount: 150,
          lipidCount: 120
        }
      }
    }}

    getDailyActivity = (id) => { return {
      data: {
        userId: 18,
        sessions: [
          {
            day: "2020-07-01",
            kilogram: 70,
            calories: 240
          },
          {
            day: "2020-07-02",
            kilogram: 69,
            calories: 220
          },
          {
            day: "2020-07-03",
            kilogram: 70,
            calories: 280
          },
          {
            day: "2020-07-04",
            kilogram: 70,
            calories: 500
          },
          {
            day: "2020-07-05",
            kilogram: 69,
            calories: 160
          },
          {
            day: "2020-07-06",
            kilogram: 69,
            calories: 162
          },
          {
            day: "2020-07-07",
            kilogram: 69,
            calories: 390
          }
        ]
      }
    }}
    
    getAverageSessions = (id) => { return {
      data: {
        userId: 18,
        sessions: [
          {
            day: 1,
            sessionLength: 30
          },
          {
            day: 2,
            sessionLength: 40
          },
          {
            day: 3,
            sessionLength: 50
          },
          {
            day: 4,
            sessionLength: 30
          },
          {
            day: 5,
            sessionLength: 30
          },
          {
            day: 6,
            sessionLength: 50
          },
          {
            day: 7,
            sessionLength: 50
          }
        ]
      }
    }}

    getPerformance = (id) => { return {
      data: {
        userId: 18,
        kind: {
          1: "cardio",
          2: "energy",
          3: "endurance",
          4: "strength",
          5: "speed",
          6: "intensity"
        },
        data: [
          {
            value: 200,
            kind: 1
          },
          {
            value: 240,
            kind: 2
          },
          {
            value: 80,
            kind: 3
          },
          {
            value: 80,
            kind: 4
          },
          {
            value: 220,
            kind: 5
          },
          {
            value: 110,
            kind: 6
          }
        ]
      }
    }}
  }

class ApiFormatter{

  constructor(isProd){
    isProd ? this.api = new Api("localhost:3000") : this.api = new Api("./mock/data.json");
  }
  
  users = (ids) => {
    let result = []
    for (const id of ids){
      result.push({id : this.api.getUser(id).data.id, firstName : this.api.getUser(id).data.userInfos.firstName, lastName : this.api.getUser(id).data.userInfos.lastName})
    }

    return result
  }

  userFirstName = (id) => this.api.getUser(id).data.userInfos.firstName

  userDailyActivity = (id) => { 
    //let result = []
    let data = this.api.getDailyActivity(id).data.sessions
    for (let i = 0; i < data.length; i++){
      data[i].day = i + 1
      //result.push({day : i, kilogram : data[i-1].kilogram, calories : data[i-1].calories})      
    }
    return data
  }

  userMacroNutriments = (id) => [
    {category : "Calories", value : this.api.getUser(id).data.keyData.calorieCount, iconUrl : caloriesIcon},
    {category : "Protéines", value : this.api.getUser(id).data.keyData.proteinCount, iconUrl : proteinIcon},
    {category : "Glucides", value : this.api.getUser(id).data.keyData.carbohydrateCount, iconUrl : carbsIcon},
    {category : "Lipides", value : this.api.getUser(id).data.keyData.lipidCount, iconUrl : fatIcon}
  ]

  userScore = (id) => id === "18" ? [{value:this.api.getUser(id).data.score} , {value:1-this.api.getUser(id).data.score}]
  : [{value:this.api.getUser(id).data.todayScore} , {value:1-this.api.getUser(id).data.todayScore}]

  userAverageSessions = (id) => {
    const days = ["L","M","M","J","V","S","D"]
    let data = this.api.getAverageSessions(id).data.sessions

    for (let i = 0; i < data.length; i++){
      data[i].day = days[i]   
    }

    return data
  }

  userPerformance = (id) => {
    const categories = ["Cardio","Energie","Endurance","Force","Vitesse","Intensité"]
    let data = this.api.getPerformance(id).data.data

    for (let i = 0; i < data.length; i++){
      data[i].kind = categories[i]   
    }

    return data.reverse()
  }

}
// eslint-disable-next-line import/no-anonymous-default-export
export default new ApiFormatter(false)