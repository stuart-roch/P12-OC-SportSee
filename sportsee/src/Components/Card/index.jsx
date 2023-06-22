import styled from "styled-components";

function Card({firstName,lastName}){
    return (
        <Container>
            <i className="fa-solid fa-user"></i>
            <p className="last-name">{lastName}</p>
            <p className="first-name">{firstName}</p>
        </Container>
    )
}


const Container = styled.div`
    .fa-user{
        font-size:5rem;
        color:rgb(255,0,0,0.5);
        margin-bottom:20px;
    }

    .last-name,.first-name{
        margin:5px;
    }
    
    .last-name{
        font-size:2rem;
    }

    .first-name{
        font-size:1.5rem;
    }
`
export default Card