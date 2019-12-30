import React from 'react'

import BasicTemplates from '../templates/BasicTemplates'
import ArticleList from '../components/ArticleList'

function ListPage(props) {
	return (
		<BasicTemplates>
			<ArticleList/>
		</BasicTemplates>
	)
}

export default ListPage
