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
import { AuthProvider } from "./contexts/Auth/AuthProvider";


const AppRoutes = () => {

    return(
    <AuthProvider>
        <BrowserRouter >
            <Routes>
                <Route path="/Login" element={  <Login /> } />
                <Route path="/" element={<PostList />} />
                <Route path="/About" element={<About />} />
                <Route path="/Footer" element={<Footer />} />
            </Routes>
        </BrowserRouter>
    </AuthProvider>
    )
}

export default AppRoutes;

