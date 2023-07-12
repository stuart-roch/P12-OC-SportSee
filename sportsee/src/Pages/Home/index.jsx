import styled from "styled-components"
import { Link } from "react-router-dom"
import Card from "../../Components/Card"
import Api from "../../utils/api/Api"
import { useEffect, useState } from "react"
import LoadSpinner from "../../Components/LoadSpinner"

function Home(){
    
    const [users,setUsers] = useState([])
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const [hasError,setHasError] = useState(false)

    useEffect(() => {

        async function fetchData(){
            try {
                const data = await Api.users([12,18])
                setUsers(data)
            } catch (error) {
                setHasError(true)
            }finally{
                setIsDataLoaded(true)
            }
        }

        fetchData()
    },[])
    
    return (
        <CenteredContainer>
            <Container>
                {(!hasError && isDataLoaded) &&  
                users.map(user => <StyledLink to={"/profil/"+user.id} key={user.id} ><Card firstName={user.firstName} lastName={user.lastName}/></StyledLink>)
                }
                {!isDataLoaded && <LoadSpinner/>}
                {hasError && <strong>Une erreur empêche l'affichage des utilisateurs</strong>}
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
    position:relative;
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