import React from 'react'

function Article(props) {
	return (
		<div style={{display: 'flex'}}>
			<div>
				<div>{props.title}</div>
				<div>{props.subTitle} | {props.content}</div>
				<div>asdf</div>
			</div>
			<div className={'Article__thumbnail'}>aa</div>
		</div>
	)
}

export default Article
