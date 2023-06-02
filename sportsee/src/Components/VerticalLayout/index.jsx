import styled from "styled-components"
import NavVerticale from "../NavVerticale"

const Container = styled.div`
    background-color:black;
    color:white;
    width:10%;
    text-align:center;
`


function VerticalLayout(){
    return (
        <Container>
            <NavVerticale />
            <p>Copyright, SportSee 2020</p>
        </Container>
    )
}

export default VerticalLayout