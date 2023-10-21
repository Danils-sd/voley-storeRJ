import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reg from "./login/reg/Reg";
import Auth from "./login/auth/VAuth";
import Main from "./main/Main";
import Error from "./Error/Error";
import About from "./About/About";
import Profil from "./Profil/Profil";
function Router(){
    return <BrowserRouter>
    <Routes>
        <Route element={<Reg/>} path="/Regist"/>
        <Route element={<Auth/>} path="/Authtorisation"/>
        <Route element={<Main/>} path="/"/>
        <Route element={<About/>} path="/About"/>
        <Route element={<Profil/>} path="/Profile"/>
        <Route element={<Error error="404"/>} path="*"/>
    </Routes>
    </BrowserRouter>
}

export default Router;