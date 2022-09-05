import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";


import Login from "./pages/login/login";
import PostList from "./components/PostList";
import { About } from "./pages/about";
import { Footer } from "./components/Footer/styles";

import  {AuthProviders}  from "./contexts/auth";
import { LoginCheck } from "./contexts/LoginCheck";

const AppRoutes = () => {

    return(
    <AuthProviders>
        <BrowserRouter >
            <Routes>
                <Route path="/Login" element={
                    <LoginCheck>
                        <Login /> 
                    </LoginCheck>
                } />
                <Route path="/" element={<PostList />} />
                <Route path="/About" element={<About />} />
                <Route path="/Footer" element={<Footer />} />
            </Routes>
        </BrowserRouter>
    </AuthProviders>
    )
}

export default AppRoutes;

