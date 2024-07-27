import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './tabs/login.tsx';
import Signup from './tabs/signup.tsx';
import Main from './tabs/main.tsx';
import Plan from './tabs/plan.tsx';
import Addplan from './tabs/addplan.tsx';
import Analysis from './tabs/analysis.tsx';
import Calendar from './tabs/calendar.tsx';
import Mypage from './tabs/mypage.tsx';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/plan" element={<Plan />} />
                    <Route path="/addplan" element={<Addplan />} />
                    <Route path="/analysis" element={<Analysis />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/mypage" element={<Mypage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
