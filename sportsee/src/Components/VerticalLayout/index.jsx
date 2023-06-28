import styled from "styled-components"
import NavVerticale from "../NavVerticale"

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:black;
    color:white;
    width:5%;
    text-align:center;
    min-height:720px;

    .nav-vertical{
        height:60%;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }

    & p{
        writing-mode:vertical-lr;
        font-size:12px;
        transform:rotate(180deg);
    }
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