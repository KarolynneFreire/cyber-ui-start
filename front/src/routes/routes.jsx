import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Login } from '../pages/LoginSignup/LoginSignup'
import { RiskOverview } from '../pages/RiskOverview/RiskOverview.jsx'

const Router = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={<Home/>} /> */}
                    <Route path='/login' element={<Login/>} />
                    {/* <Route path='/signup' element={<SignupPage/>} /> */}
                    {/* <Route path='/signup' element={<SignupPage/>} /> */}
                    {/* 404 criar a pagina depois */}
                    <Route path='/RiskOverview' element={<RiskOverview/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
