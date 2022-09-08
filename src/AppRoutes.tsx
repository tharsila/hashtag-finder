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
import { SearchedHashtags } from "./pages/SearchedHashtags";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Hashtags" element={<SearchedHashtags />} />
                <Route path="/" element={<PostList />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;

