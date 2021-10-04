import { Route, Routes } from 'react-router'
import { Feed } from '../Feed/Feed'
import { Header } from './Header'
import { PhotoPost } from './PhotoPost'
import { Stats } from './Stats'

export function Account() {
  return (
    <section className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<PhotoPost />} />
        <Route path="estatisticas" element={<Stats />} />
      </Routes>
    </section>
  )
}
