import getJSON from 'get-json-lite'
import pymIframe from 'pym-iframe-resizer'

const setup = ({
	handleDataLoaded,
	handleDataError,
	transform = (d) => d,
}) => {

	const pymChild = pymIframe({})

	// send transformed data to chartifier
	pymChild.onMessage('transform-data', d =>
		pymChild.sendMessage('data-transformed', JSON.stringify(transform(d)))
	)

	// talk to chartifier
	pymChild.onMessage('receive-data', d =>
		transform(JSON.parse(d), handleDataLoaded)
	)
	pymChild.sendMessage('request-data', true)

	// talk to production
	pymChild.onMessage('receive-data-url', url =>
		getJSON(url, handleDataLoaded, handleDataError))
	pymChild.sendMessage('request-data-url', true)

}

export default setup
