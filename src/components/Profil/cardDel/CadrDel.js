


function CardDel({id, brand, op, pryse, img}){
        

    const handAdd = () => {
        if(localStorage.getItem("user") != null){
            const us = JSON.parse(localStorage.getItem("user"));
            for(let i = 0; i < us.stuf.length; i++){
                if(id.toString() === us.stuf[i].toString()){
                    us.stuf.splice(i, 1);
                }
            }
            localStorage.setItem("user", JSON.stringify(us));
            console.log(localStorage.getItem("user"));
            document.location.reload();
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
                <img onClick={handAdd} class="svg-icon" src="korzz.png">
                
                </img>
            </div>
            </div></div>
        </div>
    );
}

export default CardDel;