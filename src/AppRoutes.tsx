import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import Login from "./pages/login/login";
import PostList from "./components/PostList";
import { About } from "./pages/about";
import { Footer } from "./components/Footer/styles";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/" element={<PostList />} />
                <Route path="/About" element={<About />} />
                <Route path="/Footer" element={<Footer />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;

