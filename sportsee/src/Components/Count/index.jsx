import styled from "styled-components"


const CountContainer = styled.div`
    display:flex;
    background-color:#FBFBFB;
`

function Count({iconUrl, category, value}){
    return (
        <CountContainer>
            <img src={iconUrl} alt={"icone de "+category} />
            <div>
                <strong className="category_value">{value}</strong>
                <p className="category">{category}</p>
            </div>
        </CountContainer>
    )
}

export default Count