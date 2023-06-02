import ICONYOGA from "../../assets/images/iconYoga.png"
import ICONSWIMMING from "../../assets/images/iconSwimming.png"

const iconsUrl = [ICONYOGA,ICONSWIMMING]

function NavVerticale(){
    return (
        <nav>
            <ul>
                {iconsUrl.map(iconUrl => <li key={iconUrl}><img src={iconUrl} alt="" /></li> )}
            </ul>
        </nav>
    )
}

export default NavVerticale