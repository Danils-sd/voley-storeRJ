import style from "./Filters.css";

function Filters(){
    return(
        <div class="filters">
            <span class="fliText">Фильтры</span>
            <div class="filGrout">
                <div class="filBrend">
                    <span class="brend">Фирма</span>
                    <div class="brabdN nike">
                        <span>Nike</span>
                        <label class="containerCH">
                            <input checked="checked" type="checkbox"/>
                            <div class="checkmark"></div>
                        </label>

                    </div>
                    <div class="brabdN Asics">
                        <span>Nike</span>
                        {/* <label class="checkbox-container">
                            <input class="custom-checkbox Tw" checked="" type="checkbox"/>
                            <span class="checkmark Tw"></span>
                        </label> */}
                    </div>
                    <div class="brabdN Adidas">
                        <span>Nike</span>
                        {/* <label class="checkbox-container">
                            <input class="custom-checkbox Th" checked="" type="checkbox"/>
                            <span class="checkmark Th"></span>
                        </label> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filters;