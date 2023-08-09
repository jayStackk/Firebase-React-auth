import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin";
import HomePage from "../HomePage";
import ForgotPassword from "./ForgotPass";
import DashBoard from "./DashBoard";



function PasswordLoginWithFirebase(){
    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<RegisterAndLogin/>} />
                    <Route path="/dashboard" element={<DashBoard/>} />
                    <Route path="/home" element={<HomePage/>} />
                    <Route path="/reset" element={<ForgotPassword/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default PasswordLoginWithFirebase;