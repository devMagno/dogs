import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Login } from './Components/Login/Login'
import { UserStorage } from './UserContext'
import { Account } from './Components/Account/Account'
import { ProtectedRoute } from './Components/Helpers/ProtectedRoute'

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<Account />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App
