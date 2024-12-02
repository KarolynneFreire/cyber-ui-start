import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Login } from '../pages/LoginSignup/LoginSignup'
import Home from '../pages/Home/Home'

const Router = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>} />
                    {/* <Route path='/signup' element={<SignupPage/>} /> */}
                    {/* <Route path='/signup' element={<SignupPage/>} /> */}
                    {/* 404 criar a pagina depois */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
