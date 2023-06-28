import styled from "styled-components"
import VerticalLayout from "../../Components/VerticalLayout"
import Count from "../../Components/Count"
import DailyActivityChart from "../../Components/DailyActivityChart"
import HebdoSessionChart from "../../Components/HebdoSessionChart"
import PerformanceChart from "../../Components/PerformanceChart"
import ScoreChart from "../../Components/ScoreChart"
import Api from "../../utils/api/Api"
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
    }
`
const Name = styled.span`
    color:red;
`


function Profil(){

    const { id } = useParams()

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

    return (
        <Container>
            <VerticalLayout />
            <MainContainer>
                <div className="user_info">
                    <h1>Bonjour <Name>{Api.userFirstName(id)}</Name></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="charts-macro_container">
                    <div className="charts_container">
                        <DailyActivityChart data = {Api.userDailyActivity(id)} />
                        <HebdoSessionChart data = {Api.userAverageSessions(id)} />
                        <PerformanceChart data = {Api.userPerformance(id)} />
                        <ScoreChart data={Api.userScore(id)}/>
                    </div>
                    <div className="macro-count_container">
                        {Api.userMacroNutriments(id).map(obj => <Count key={obj.category} iconUrl={obj.iconUrl} value={obj.value} category={obj.category}/>)}
                    </div>
                </div>
            </MainContainer >
        </Container>
    )
}

export default Profil