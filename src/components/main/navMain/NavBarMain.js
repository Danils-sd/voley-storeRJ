
import { useNavigate } from "react-router-dom";
import style from "./NavBarMain.css";

function NavBarMain(){
    const navigate = useNavigate();
    const handkAbout = () => {
        navigate("/About")
    }
    const handkMain = () => {
        navigate("/")
    }
    const handProf = () => {
        if(localStorage.getItem("user") != null){
            navigate("/Profile")
        } else {
            navigate("/Authtorisation")
        }
    }
    return(
        <div class="navBlok">
            <img src="logoVoley.png" class="logoMain"/>
            <span class="buttonNav staf" onClick={handkMain}>Кроссовки</span>
            <span class="buttonNav" onClick={handkAbout}>О нас</span>
            <button class="btn">
                <img onClick={handProf} fill="#0092E4" src="64572.png">
                </img>
            </button>
        </div>
    );
}
export default NavBarMain;