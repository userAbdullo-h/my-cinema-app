import React from 'react'
import MovieService from '../../services/movie-service'
import Spinner from '../spinner/spinner'
import Error from '../error/error'
import './hero.scss'

class Hero extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movie: {},
			loading: true,
			error: false,
		}
		this.movieService = new MovieService()
		this.getMovie()
	}
	getMovie = () => {
		this.movieService
			.getRandomMovie()
			.then(res => this.setState({ movie: res }))
			.catch(() => this.setState({ error: true }))
			.finally(() => this.setState({ loading: false }))
	}

	render() {
		const { movie, loading } = this.state

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
					{!loading ? (
						<div className='loader-wrapper'>
							<Spinner />
						</div>
					) : (
						<Content movie={movie} />
					)}
				</div>
			</div>
		)
	}
}

export default Hero

const Content = ({ movie }) => {
	return (
		<>
			<img src={movie.thumbnail} alt={movie.name} />

			<div className='hero__movie-descr'>
				<h2>{movie.name}</h2>
				<p>
					{movie.description && movie.description.length >= 200
						? `${movie.description.slice(0, 200)}...`
						: movie.description}
				</p>
				<div>
					<button className='btn btn-secondary'>Random movie</button>
					<button className='btn btn-primary'>Details</button>
				</div>
			</div>
		</>
	)
}
