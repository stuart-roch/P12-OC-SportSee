import styled from "styled-components"

const navOptions = ["Accueil","Profil","Réglage","Communauté"]

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
function NavHorizontale(){  

    return (
        <StyledNav>
            <StyledUl>
                {navOptions.map(option =>  <StyledLi key={option}>{option}</StyledLi> )}
            </StyledUl>
        </StyledNav>
    )

}

export default NavHorizontale