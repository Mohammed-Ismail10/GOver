import React from 'react'
import Helmet from 'react-helmet'
import Header from '../Header/Header.jsx'
import Recomendation from '../Recomendation/Recomendation.jsx'

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Game Over</title>
    </Helmet>
      <Header/>
      <Recomendation/>
    </>
  )
}
