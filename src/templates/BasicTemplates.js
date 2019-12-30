import React from 'react'

function BasicTemplates(props) {
	return (
		<div className="BasicTemplates">
			<section className={'Header'}>Header</section>
			<section className={'Content'}>{props.children}</section>
			<section className={'Footer'}>Footer</section>
		</div>
	)
}

export default BasicTemplates
