import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

function BasicTemplates(props) {
	return (
		<div className="BasicTemplates">
			<section className={'Header'}>
				<Header/>
			</section>
			<section className={'Body'}>
				{props.children}
			</section>
			<section className={'Footer'}>
				<Footer/>
			</section>
		</div>
	)
}

export default BasicTemplates
