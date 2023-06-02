import styled from "styled-components"
import VerticalLayout from "../../Components/VerticalLayout"
import DailyActivityChart from "../../Components/DailyActivityChart"

const Container = styled.div`
    display:flex;
`
const MainContainer = styled.div`
    width:90%;
    margin: 1rem 3rem;
`
const Name = styled.span`
    color:red;
`


function Profil(){

    return (
        <Container>
            <VerticalLayout />
            <MainContainer>
                <div>
                    <h1>Bonjour <Name>Thomas</Name></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div>
                    <DailyActivityChart/>
                </div>
            </MainContainer >
        </Container>
    )
}

export default Profil