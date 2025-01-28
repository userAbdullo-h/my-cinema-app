import React from 'react'
import MovieService from '../../services/movie-service'
import './hero.scss'

class Hero extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: null,
			description: null,
			thumbnail: null,
			id: null,
		}
		this.movieService = new MovieService()
		this.getMovie()
	}
	getMovie = () => {
		this.movieService.getRandomMovie().then(res => this.setState(res))
	}

	render() {
		const { name, description, id, thumbnail } = this.state

		return (
			<div className='hero'>
				<div className='hero__info'>
					<h2>FIND MOVIES</h2>
					<h1>Tv Shows and more</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
						magni modi voluptas incidunt fuga illo quo recusandae impedit
						doloribus. Fuga, laboriosam ut natus repudiandae porro nihil dicta
						nesciunt nam vel!
					</p>
					<button className='btn btn-primary'>Details</button>
				</div>

				<div className='hero__movie'>
					<img src={thumbnail} alt={name} />

					<div className='hero__movie-descr'>
						<h2>{name}</h2>
						<p>
							{description && description.length >= 200
								? `${description.slice(0, 200)}...`
								: description}
						</p>
						<div>
							<button className='btn btn-secondary'>Random movie</button>
							<button className='btn btn-primary'>Details</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Hero
