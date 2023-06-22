import styled from "styled-components"
import { Link } from "react-router-dom"
import Card from "../../Components/Card"

function Home(){

    const users = [{id:12,firstName : "Thomas", lastName : "DUPONT"},{id:18,firstName : "Lea", lastName : "DURAND"}]

    return(
        <CenteredContainer>
            <Container>
                {users.map(user => <StyledLink to={"/profil/"+user.id} key={user.id} ><Card firstName={user.firstName} lastName={user.lastName}/></StyledLink>)}
            </Container>
        </CenteredContainer>
    )
}

const CenteredContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    min-height:720px;
`
const Container = styled.div`
    display:flex;
    align-items:center;
`
const StyledLink = styled(Link)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:300px;
    height:300px;
    background-color:#FBFBFB;
    margin-right:20px;
    border-radius:25px;
    text-align:center;
    text-decoration:none;
    color:black;
`
export default Home