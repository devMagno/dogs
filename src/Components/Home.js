import React from 'react'
import { Feed } from './Feed/Feed'
import { Head } from './Helpers/Head'

export function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site Dogs com o feed de fotos" />
      <Feed />
    </section>
  )
}
