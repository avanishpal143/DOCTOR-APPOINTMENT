import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";

import React from 'react'

const Layout = () => {
  return (
    <>
      <Header/>
      <main>
        <Routers/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout
