import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";


import Login from "./pages/login/login";
import Home from "./pages/home";
import { About } from "./pages/about";
import { SearchedHashtags } from "./pages/SearchedHashtags";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { AuthProvider } from "./contexts/Auth/AuthProvider"
import { LoginCheck } from "./contexts/Auth/LoginCheck";


const AppRoutes = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/Login" element={
                        <LoginCheck>
                            <Login />
                        </LoginCheck>
                    } />
                    <Route path="/Hashtags" element={
                        <RequireAuth>
                            <SearchedHashtags/>
                        </RequireAuth>
                    } />
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;

