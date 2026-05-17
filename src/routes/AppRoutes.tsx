import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

export default function AppRoutes(){

    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/home" element={<Home />} />
            </Route>

        </Routes>
    );
}