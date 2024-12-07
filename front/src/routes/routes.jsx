import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Login } from '../pages/LoginSignup/LoginSignup'
import { RiskOverview } from '../pages/RiskOverview/RiskOverview.jsx'
import Home from '../pages/Home/Home'
import TeamPage from '../pages/Team/Team'
import Signup from '../pages/Signup/Signup.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'

const Router = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/explore-team' element={<TeamPage/>} />
                    <Route path='*' element={<NotFound/>} />
                    <Route path='/RiskOverview' element={<RiskOverview/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
