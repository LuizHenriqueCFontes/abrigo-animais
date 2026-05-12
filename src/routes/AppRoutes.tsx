import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";



export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/teste" element={<Header />}/>
        </Routes>
    );
}