import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import Home from '../assets/pag/Home/Home'
import { Login, SignupPage } from '../pages/LoginSignup/LoginSignup'

const Router = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={<Home/>} /> */}
                    <Route path='/' element={<Login/>} />
                    <Route path='/signup' element={<SignupPage/>} />
                    {/* <Route path='/signup' element={<SignupPage/>} /> */}
                    {/* 404 criar a pagina depois */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
