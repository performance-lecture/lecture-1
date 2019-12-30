import React, {useEffect, useState} from 'react'
import axios from 'axios'

import Article from '../Article'

function ArticleList(props) {
	const [articles, setArticles] = useState([])

	const getArticles = () => {
		axios.get('http://localhost:3001/articles')
			.then((success) => {
				console.log(success.data)
				setArticles([...articles, ...success.data])
			})
	}

	useEffect(() => {
		getArticles()
	}, [])

	return (
		<div>
			{articles.map((item) => (
				<Article key={item.no} {...item}/>
			))}
		</div>
	)
}

export default ArticleList
