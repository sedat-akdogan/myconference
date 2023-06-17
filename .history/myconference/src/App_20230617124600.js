import React from "react";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";

const App = () => {
    return (
        <div className="dark:bg-[#23242a]">
            <AuthContext>
                <AppRouter />
                <ToastContainer />
            </AuthContext>
        </div>
    );
};

export default App;