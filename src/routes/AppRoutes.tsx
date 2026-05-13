import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Input from "../components/Input/Input";
import { useState } from "react";



export default function AppRoutes(){

    const [value, setValue] = useState("")

    return(
        <Routes>
            
            <Route element={<MainLayout />}>
                <Route path="/teste" element={<Input id="10" value={value} onChange={setValue}/>}/>
            </Route>

        </Routes>
    );
}