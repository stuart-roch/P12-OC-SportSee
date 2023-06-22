import styled from "styled-components"
import VerticalLayout from "../../Components/VerticalLayout"
import Count from "../../Components/Count"
import DailyActivityChart from "../../Components/DailyActivityChart"
import HebdoSessionChart from "../../Components/HebdoSessionChart"
import PerformanceChart from "../../Components/PerformanceChart"
import ScoreChart from "../../Components/ScoreChart"
import Api from "../../utils/api/Api"
import { useEffect, useState } from "react"

const Container = styled.div`
    display:flex;
`
const MainContainer = styled.div`
    width:90%;
    margin: 1rem 3rem;

    .charts_container{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        width:75%;
        margin-top:50px;
    }
`
const Name = styled.span`
    color:red;
`


function Profil(){

    /*const [data,setData] = useState({})

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
        
    },[])*/

    const data = async () => await Api.user(12)
    console.log(data())

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
                        <DailyActivityChart data={data} />
                        <HebdoSessionChart />
                        <PerformanceChart />
                        <ScoreChart data={{"todayScore": 0.12}}/>
                    </div>
                </div>
            </MainContainer >
        </Container>
    )
}

export default Profil