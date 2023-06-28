import styled from "styled-components"


const CountContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#FBFBFB;
    width:100%;
    height:100px;
    border-radius:5px;

    & img{
        width:50px;
        height:50px;
        margin-right:20px;
    }

    .category_value, .category{
        margin:0;
    }

    .category{
        color:#74798C;
    }
`

function Count({iconUrl, category, value}){
    return (
        <CountContainer>
            <img src={iconUrl} alt={"icone de "+category} />
            <div>
                <strong className="category_value">{category === "Calories" ? value + "kCal" : value + "g"}</strong>
                <p className="category">{category}</p>
            </div>
        </CountContainer>
    )
}

export default Count