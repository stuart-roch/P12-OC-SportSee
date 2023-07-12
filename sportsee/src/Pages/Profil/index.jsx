import styled from "styled-components"
import VerticalLayout from "../../Components/VerticalLayout"
import Count from "../../Components/Count"
import DailyActivityChart from "../../Components/DailyActivityChart"
import HebdoSessionChart from "../../Components/HebdoSessionChart"
import PerformanceChart from "../../Components/PerformanceChart"
import ScoreChart from "../../Components/ScoreChart"
import Api from "../../utils/api/Api"
import LoadSpinner from "../../Components/LoadSpinner"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Container = styled.div`
    display:flex;
`
const MainContainer = styled.div`
    width:95%;
    margin: 1rem 3rem;

    .charts-macro_container{
        display:flex;
        margin-top:50px;
        justify-content:space-between;
        margin-bottom:50px;

    }
    .charts_container{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        width:75%;
    }

    .macro-count_container{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        width:20%;
        position:relative;
    }

    .err-msg_container{
        position:absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
        text-align:center;
    }
`
const Name = styled.span`
    color:red;
`


function Profil(){

    const { id } = useParams()

    const [firstName,setFirstName] = useState("")
    const [macro,setMacro] = useState([])
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const [hasError,setHasError] = useState(false)

    useEffect(() => {
        
        async function fetchData(){
            try{
                const data1  = await Api.userFirstName(id)
                const data2 = await Api.userMacroNutriments(id)
                setFirstName(data1)
                setMacro(data2)
            }catch(err){
                setHasError(true)
            }finally{
                setIsDataLoaded(true)
            }
        }

        fetchData()
        
    },[id])


    return (
        <Container>
            <VerticalLayout />
            <MainContainer>
                <div className="user_info">
                    <h1>Bonjour <Name>{firstName}</Name></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="charts-macro_container">
                    <div className="charts_container">
                        <DailyActivityChart api = {Api} id = {id} />
                        <HebdoSessionChart api = {Api} id = {id} />
                        <PerformanceChart api = {Api} id = {id} />
                        <ScoreChart api = {Api} id = {id}/>
                    </div>
                    <div className="macro-count_container">
                        {(isDataLoaded && !hasError) && macro.map(obj => <Count key={obj.category} iconUrl={obj.iconUrl} value={obj.value} category={obj.category}/>)}
                        {!isDataLoaded && <LoadSpinner/>}
                        {hasError && <div className='err-msg_container'><strong>Une erreur empêche d'afficher les données</strong></div> }
                    </div>
                </div>
            </MainContainer >
        </Container>
    )
}

export default Profil