class MovieService {
	_apiBase = 'https://api.themoviedb.org/3'
	_apiLng = 'language=en-US'
	_apiKey = 'api_key=0c1bed333af9ff38d57cb9498ea4b10d'
	_apiImg = 'https://image.tmdb.org/t/p/original'

	getResource = async url => {
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`Couldn't fetch ${url}, status ${response.status} `)
		}

		return await response.json()
	}

	getPopularMovies = async () => {
		return this.getResource(
			`${this._apiBase}/movie/popular?${this._apiLng}&${this._apiKey}`
		)
	}

	getTrandingMovies = async () => {
		return this.getResource(
			`${this._apiBase}/movie/top_rated?${this._apiLng}&${this._apiKey}`
		)
	}

	getDetailedMovie = async id => {
		return this.getResource(
			`${this._apiBase}/movie/278?${this._apiLng}&${this._apiKey}`
		)
	}

	getRandomMovie = async () => {
		const res = await this.getPopularMovies()
		const movie = res.results[Math.floor(Math.random() * res.results.length)]
		return this._transformMovie(movie)
	}

	_transformMovie = movie => {
		return {
			name: movie.original_title,
			description: movie.overview,
			thumbnail: `${this._apiImg}${movie.poster_path}`,
			id: movie.id,
		}
	}
}

export default MovieService
