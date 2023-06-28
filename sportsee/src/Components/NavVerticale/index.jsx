import styled from "styled-components"

import IconYoga from "../../assets/images/iconYoga.png"
import IconSwimming from "../../assets/images/iconSwimming.png"
import IconBiking from "../../assets/images/iconBiking.png"
import IconMusculation from "../../assets/images/iconMusculation.png"

const iconsUrl = [IconYoga,IconSwimming,IconBiking,IconMusculation]

const StyledImg = styled.img`
    width:80%;
`

function NavVerticale(){
    return (
        <nav className="nav-vertical">
            <ul>
                {iconsUrl.map(iconUrl => <li key={iconUrl}><StyledImg src={iconUrl} alt="" /></li> )}
            </ul>
        </nav>
    )
}

export default NavVerticale