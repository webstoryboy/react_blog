import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
//import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
    return (
        <>
            <Header />
            <Login />
            <Footer />
        </>
    );
}

export default App;
