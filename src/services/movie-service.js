class MovieService {
	getResource = async url => {
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`Couldn't fetch ${url}, status ${response.status} `)
		}

		return await response.json()
	}

	getAllPopular = async () => {}

	getAllTranding = async () => {}
}
