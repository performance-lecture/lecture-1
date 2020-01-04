import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Article from '../Article'
import './index.css'

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
		<ul className={'ArticleList'} style={{listStyle: 'none', padding: 0}}>
			{articles.map((item) => (
				<li key={item.id}>
					<Link to={`/view/${item.id}`} style={{textDecoration: 'none', color: 'initial'}}>
						<Article {...item}/>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default ArticleList
