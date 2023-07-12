import styled from "styled-components"


function LoadSpinner(){
    return (
        <Container>
            <i className="fa-solid fa-rotate"></i>
        </Container>
    )
}

const Container = styled.div`

    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    top:0;
    font-size:32px;
    
    .fa-rotate{
        animation:3s ease-in infinite both rotate;
    }

    @keyframes rotate{
        from{
            tranform:rotate(0deg);
        }
        to{
            transform:rotate(360deg);
        }
    }

`

export default LoadSpinner