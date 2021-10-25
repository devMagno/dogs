import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Login } from './Components/Login/Login'
import { UserStorage } from './UserContext'
import { Account } from './Components/Account/Account'
import { ProtectedRoute } from './Components/Helpers/ProtectedRoute'
import { Photo } from './Components/Photo/Photo'
import { Profile } from './Components/Account/Profile'
import { NotFound } from './Components/NotFound'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='appBody'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRoute path="conta/*" element={<Account />} />
              <Route path="/foto/:id" element={<Photo />} />
              <Route path="/perfil/:user" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
