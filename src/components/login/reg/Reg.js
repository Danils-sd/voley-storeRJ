import { useNavigate } from "react-router-dom";
import style from "./Reg.css"
import { useState } from "react";
import { User } from "../../../data/User";
import { DUSERS } from "../../../data/DATAUSERS";

function Reg(){
    const navigate = useNavigate();

    const navHandlAuth = () => {
        navigate("/Authtorisation");
    }

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [passwordOne, setPasswordOne] = useState("");

    const [loginError, setLoginError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordOneError, setPasswordOneError] = useState(false);

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    
    const loginHandler = (e) => {
        setLogin(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 21){
          setLoginError(true);
        } else {
          setLoginError(false);
        }
      }
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
        if(!loginError){
          alert("Имя не может быть пустым и длиннее 20 символов")
        } else if (!emailError){
          alert("Неверный формат почты");
        } else if (!passwordOneError){
          alert("Пароль не может быть короче 6 и длиннее 12");
        } else {
          let c = true;
          DUSERS.map((obj) => {
            if(obj.email === email){
              c = false;
            }
            
          })
          if(!c){
            alert("Такого пользователь уже есть");
          } else {
            User.login = login;
            User.email = email;
            User.password = passwordOne;
            localStorage.setItem("user", JSON.stringify(User));
            navigate("/");
          }
        }
      }
    return(
        <div class="bacReg">
            <div class="form">
                <span type="text" class="topText">Регистрация</span>
                <div class="containerReg">
                    <input onChange={e => loginHandler(e)} value={login} required type="text" name="text" class="inputReg"/>
                    <label class="labelReg">Логин</label>
                </div>
                <div class="containerReg">
                    <input onChange={e => emailHandler(e)} value={email} required type="text" name="text" class="inputReg"/>
                    <label class="labelReg">Почта</label>
                </div>
                <div class="containerReg">
                    <input onChange={e => passwordOneHandl(e)} value={passwordOne} required type="text" name="text" class="inputReg"/>
                    <label class="labelReg">Пароль</label>
                </div>

                <button onClick={buttonHand} class="registButton" id="rB">Продожить</button>
                <span type="text" class="orOne">Есть аккаунт? <span type="text" class="orOne link" onClick={navHandlAuth}>Авторизация</span></span>
            </div>
        </div>
    )
}
export default Reg;