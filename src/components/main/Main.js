import style from "./Main.css"
import Filters from "./filters/Filters";
import SmalCard from "./smalCard/SmaiCard";

import NavBarMain from "./navMain/NavBarMain";
import { BD, BDAD, BDTS } from "../../data/BD";
import { useNavigate } from "react-router-dom";
function Main(){
    return(
        <div class="bacMain">
            <nav class="navbar">
                <NavBarMain/>
            </nav>
            {/* <Filters/> */}
            <div class="comtent">
                <span class="titls">Nike</span>
                <div class="snicBlock cB">
                    {
                        BD.map((obg) => {
                            return(
                            <SmalCard id={obg.id} brand={obg.brand} op={obg.op} pryse={obg.pryse} img={obg.img}/>
                            )
                            console.log(obg.id);
                        })
                    }
                </div>
                <span class="titls">Asics</span>
                <div class="tshertBlock cB">
                    {
                        BDTS.map((obg) => {
                            return(
                            <SmalCard id={obg.id} brand={obg.brand} op={obg.op} pryse={obg.pryse} img={obg.img}/>
                            )
                        })
                    }
                </div>
                <span class="titls">Adidas</span>
                <div class="nakolBlock cB">
                    {
                        BDAD.map((obg) => {
                            return(
                            <SmalCard id={obg.id} brand={obg.brand} op={obg.op} pryse={obg.pryse} img={obg.img}/>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    );
}

export default Main;