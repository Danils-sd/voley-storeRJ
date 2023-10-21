import style from "./Error.css";

function Error({error}){
    return(
        <div class="bacError">
            <p class="errorStr">ERROR {error}</p>
        </div>
    )
}

export default Error;