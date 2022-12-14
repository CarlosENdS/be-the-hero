import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import EditIncident from './pages/EditIncident';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Logon/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/incidents/new" element={<NewIncident/>}/>
                <Route path="/incidents/edit" element={<EditIncident/>}/>
            </Routes>
        </BrowserRouter>
    );
}