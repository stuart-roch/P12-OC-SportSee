import styled from "styled-components"
import VerticalLayout from "../../Components/VerticalLayout"
import Count from "../../Components/Count"
import DailyActivityChart from "../../Components/DailyActivityChart"
import Api from "../../utils/api/Api"
import { useEffect, useState } from "react"

const Container = styled.div`
    display:flex;
`
const MainContainer = styled.div`
    width:90%;
    margin: 1rem 3rem;

    .charts_container{
        margin-top:50px;
    }
`
const Name = styled.span`
    color:red;
`


function Profil(){

    const [data,setData] = useState({})

    useEffect(() => {
        
        async function fetchData(){
            try{
                const response = await fetch("./mock/data.json")
                const datas  = await response.json()
                setData(datas)
            }catch(err){
                console.log(err)
            }
        }

        fetchData()
        
    },[])

    console.log(Api.user(12))

    return (
        <Container>
            <VerticalLayout />
            <MainContainer>
                <div className="user_info">
                    <h1>Bonjour <Name>Thomas</Name></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div>
                    <div className="charts_container">
                        <DailyActivityChart data={data}/>
                    </div>
                    
                </div>
            </MainContainer >
        </Container>
    )
}

export default Profil