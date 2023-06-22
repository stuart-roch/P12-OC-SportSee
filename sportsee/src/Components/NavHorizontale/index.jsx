import styled from "styled-components"
import { Link } from "react-router-dom"

const navOptions = [{name:"Accueil",url:"/"},"Profil","Réglage","Communauté"]

const StyledNav = styled.nav`
    width:80%;
`

const StyledUl = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const StyledLi = styled.li`
    width:20%;
`
const StyledLink = styled(Link)`
    text-decoration:none;
    color:white;
`
function NavHorizontale(){  

    return (
        <StyledNav>
            <StyledUl>
                {navOptions.map(option => typeof option !== 'object' ? <StyledLi key={option}>{option}</StyledLi> : 
                <StyledLi key={option.name}><StyledLink to={option.url}>{option.name}</StyledLink></StyledLi>)}
            </StyledUl>
        </StyledNav>
    )
}

export default NavHorizontale