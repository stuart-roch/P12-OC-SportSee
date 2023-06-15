import env from "react-dotenv"


class Api {
    constructor(){
        this.url = "http://localhost:3000"
    }

    user = async (id) => {/*return fetch(`${this.url}/user/${id}`)
    .then((response) => {
      if(response.ok){
        return response.json()
      }
    })
    .then((data) => {
      return data
    })
  }*/
  const response = await fetch(`${this.url}/user/${id}`)
  const data = await response.json()
  return data.data
}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Api()