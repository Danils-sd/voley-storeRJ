import { useNavigate } from "react-router-dom";
import style from "./VAuth.css";
import { useState } from "react";
import { User, UserCook} from "../../../data/User";
import { DUSERS } from "../../../data/DATAUSERS";

function Auth(){

    const navigate = useNavigate();

    const navHandlReg = () => {
        navigate("/Regist");
    }



    const [email, setEmail] = useState("");
    const [passwordOne, setPasswordOne] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordOneError, setPasswordOneError] = useState(false);

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        if(validateEmail(e.target.value)){
          setEmailError(true);
        } else {
          setEmailError(false);
        }
      }
    
    const passwordOneHandl = (e) =>{
        setPasswordOne(e.target.value);
        if(e.target.value.length > 5 && e.target.value.length < 13){
          setPasswordOneError(true);
        } else {
          setPasswordOneError(false);
        }
      }

    const buttonHand = ()=>{
        if (!emailError){
          alert("Неверный формат почты");
        } else if (!passwordOneError){
          alert("Пароль не может быть короче 6 и длиннее 12");
        } else {
          let c = true;
          DUSERS.map((obj) => {
            if(obj.email === email && obj.password === passwordOne){
              localStorage.setItem("user", JSON.stringify(obj))
              navigate("/");
              c = false;
            }
            
          })
          if(c){
            alert("Такого пользователя нет");
          }
          // User.email = email;
          // User.password = passwordOne;
          // localStorage.setItem("user", JSON.stringify(User))
          // navigate("/");
        }
      }
    return(
        <div class="bacAuth">
             <div class="form">
                <span type="text" class="topText">Авторизация</span>
                <div class="container">
                    <input onChange={e => emailHandler(e)} value={email} required type="text" name="text" class="input"/>
                    <label class="label">Почта</label>
                </div>
                <div class="container">
                    <input onChange={e => passwordOneHandl(e)} value={passwordOne} required type="text" name="text" class="input"/>
                    <label class="label">Пароль</label>
                </div>
                <button onClick={buttonHand} class="registButton" id="aB">Продожить</button>
                <span type="text" class="orOne">Нет аккаунта? <span type="text" class="orOne link" onClick={navHandlReg}>Регистрация</span></span>
            </div>
        </div>
    )
}

export default Auth;