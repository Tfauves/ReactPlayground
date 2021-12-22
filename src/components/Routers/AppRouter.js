import React from "react";
import { Route, Routes } from "react-router";
import NavBar from "../NavBar/NavBar"
import Home from "../Home/Home";
import News from "../News";
const AppRouter = () => {
    return (
        <div style={{width: "100%"}}>
            <NavBar />
            <div style={{marginTop: "75px,width: 100%"}}>
                <Routes>
                    <Route path="/" element={<Home}
                </Routes>
            </div>
        </div>
    )
}