import style from "./SmalCard.css";
import { User, UserCook } from "../../../data/User";
import { useNavigate } from "react-router-dom";
function SmalCard({id, brand, op, pryse, img}){

    const navigate = useNavigate();

    const handAuth = () => {
        navigate("/Authtorisation");
    }
        

    const handAdd = () => {
        if(localStorage.getItem("user") != null){
            const us = JSON.parse(localStorage.getItem("user"));
            us.stuf.push(id);
            localStorage.setItem("user", JSON.stringify(us));
            console.log(localStorage.getItem("user"));
        } else {
            handAuth();
        }
    }
    return(
        <div class="blockSCard">
            <div class="card">
            <img class="card-img" src={img}></img>
            <div class="card-info">
                <p class="text-title">{brand}</p>
                <p class="text-body">{op}</p>
            </div>
            <div class="card-footer">
            <span class="text-title">{pryse}</span>
            <div class="card-button">
                <img onClick={handAdd} class="svg-icon" src="tekega.png">
                
                </img>
            </div>
            </div></div>
        </div>
    );
}

export default SmalCard;