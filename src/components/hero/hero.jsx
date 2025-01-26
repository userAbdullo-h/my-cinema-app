import './hero.scss'

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero__info'>
				<h2>FIND MOVIES</h2>
				<h1>Tv Shows and more</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni
					modi voluptas incidunt fuga illo quo recusandae impedit doloribus.
					Fuga, laboriosam ut natus repudiandae porro nihil dicta nesciunt nam
					vel!
				</p>
				<button className='btn btn-primary'>Details</button>
			</div>

			<div className='hero__movie'>
				<img src='/public/image1.svg' alt='Image 1' />

				<div className='hero__movie-descr'>
					<h2>Madellin</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
						praesentium, fugiat rerum sed sint tempora, odit laudantium
						obcaecati itaque explicabo facilis et deserunt nesciunt expedita
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

export default Hero
