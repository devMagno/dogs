import { useContext } from 'react'
import { Route, Routes } from 'react-router'
import { UserContext } from '../../UserContext'
import { Feed } from '../Feed/Feed'
import { NotFound } from '../NotFound'
import { Header } from './Header'
import { PhotoPost } from './PhotoPost'
import { Stats } from './Stats'

export function Account() {
  const { data } = useContext(UserContext)

  return (
    <section className="container">
      <Header />
      <Routes>
        {data && <Route path="/" element={<Feed user={data.id} />} />}
        <Route path="postar" element={<PhotoPost />} />
        <Route path="estatisticas" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}
