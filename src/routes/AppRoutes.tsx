import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import PetSearch from "../pages/PetSearch/PetSearch";
import PetDetails from "../pages/PetDetails/PetDetails";

export default function AppRoutes(){

    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/home" element={<Home />} />

                <Route path="/pet-search" element={<PetSearch />}/>

                <Route path="/pet-details" element={<PetDetails />}/>
            </Route>
        </Routes>
    );
}