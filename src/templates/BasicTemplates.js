import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

function BasicTemplates(props) {
  return (
    <div className="BasicTemplates">
      <section className={'HeaderSection'}>
        <Header />
      </section>
      <section className={'Body'}>{props.children}</section>
      <section className={'FooterSection'}>
        <Footer />
      </section>
    </div>
  )
}

export default BasicTemplates
