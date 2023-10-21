import { useEffect, useState } from "react";
import style from "./Profile.css";
import { ALLBD, BD } from "../../data/BD";
import SmalCard from "../main/smalCard/SmaiCard";
import { useNavigate } from "react-router-dom";
import CardDel from "./cardDel/CadrDel";

function Profil(){
    const [login, setLogin] = useState("Login");
    const [email, setEmail] = useState("-")
    const [tov, setTov] = useState([])
    const [tovPry, setTovPry] = useState(0);
    const [tovGot, setTovGot] = useState(false);
    const navigate = useNavigate();


    const handlLogOut = () => {
        localStorage.removeItem("user");
        navigate("/");
    }


    useEffect(() => {
        if(localStorage.getItem("user") != null){
            const us = JSON.parse(localStorage.getItem("user"));
            setTov(us.stuf)
            
        }
        let rr = 0;
        ALLBD.map((obg) => {
            for(let i = 0; i < JSON.parse(localStorage.getItem("user")).stuf.length; i++){
                
                if(obg.id.toString() == JSON.parse(localStorage.getItem("user")).stuf[i].toString()){
                    rr += obg.pryse;
                    break;
                }
            }
        })
        setTovPry(rr)
        setTovGot(true);

        const us = JSON.parse(localStorage.getItem("user"));
        setLogin(us.login);
        setEmail(us.email);
    }, [])
    return(
        <div class="profilCard">
            <div class="assProfile">
                <div class="profData">
                    <span class="profLogin">{login}</span>
                    <span class="profemail">{email}</span>
                </div>
                <div class='setTovProf'>
                    {tovGot != 0 && (

                        ALLBD.map((obg) => {
                            for(let i = 0; i < tov.length; i++){
                                
                                if(obg.id.toString() == tov[i].toString()){
                                    
                                    return(
                                        <div class="sectTovProf">
                                            <p class="tovName">{obg.brand + " " + obg.op}</p>
                                            <p class="tovPrice">{obg.pryse}</p>
                                        </div>
                                    )
                                }
                            }
                        })
                    )}
                </div>
                {tovGot != 0 && (
                        <p class="tovItog">Итог: {tovPry}</p>
                    )}
                <button class="BtnPay">
                    Pay
                    <svg class="svgIconPay" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
                </button>
                <button onClick={handlLogOut} class="BtnProf">
  
                    <div class="signProf"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                    
                    <div class="textProf">Logout</div>
                </button>
            </div>
            <div class="korz">
                {tov.length == 0 && (
                    <p class="nonTov">Товаров пока нет</p>
                )}
                {tov.length != 0 && (
                    
                    
                    // tov.map((t) => {
                        
                    //     BD.map((obg) => {
                    //         // console.log(obg.id.toString(), t.toString(), obg.id.toString() == t.toString());
                    //         // if(obg.id.toString() == t.toString()){
                    //         //     console.log(1)
                    //         //     return(
                    //         //         <SmalCard id={obg.id} brand={obg.brand} op={obg.op} pryse={obg.pryse} img={obg.img}/>
                    //         //     )
                    //         // }
                            
                    //     })
                    // })
                    ALLBD.map((obg) => {
                        for(let i = 0; i < tov.length; i++){
                            
                            if(obg.id.toString() == tov[i].toString()){
                                return(
                                    <CardDel id={obg.id} brand={obg.brand} op={obg.op} pryse={obg.pryse} img={obg.img}/>
                                )
                            }
                        }
                    })
                )}
            </div>
        </div>
    );
}
export default Profil;