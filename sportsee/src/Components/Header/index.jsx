import NavHorizontale from "../NavHorizontale"
import LOGO from "../../assets/images/logo.png"
import styled from 'styled-components'

const StyledHeader = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:black;
    color:white;
    font-size:1.5rem;
    padding:1rem;
`
const StyledImg = styled.img`
    height:4rem;
`
function Header(){
    return (
        <StyledHeader>
            <StyledImg src={LOGO} alt="logo de l'entreprise" />
            <NavHorizontale/>
        </StyledHeader>
    )
}

export default Header