const setSliderTooltip = ({ container, text, index }) => {

	const input = container.querySelector('input')
	const tooltip = container.querySelector('.tooltip')

	const min = +input.getAttribute('min')
	const max = +input.getAttribute('max')

	// set tooltip content
	// eslint-disable-next-line no-param-reassign
	tooltip.querySelector('span').innerHTML = text

	const position = 100 * index / (max - min)

	// eslint-disable-next-line no-param-reassign
	tooltip.style.left = `${position}%`

	const transforms = [
		'webkitTransform',
		'MozTransform',
		'msTransform',
		'OTransform',
		'transform',
	]

	transforms.forEach(d => {
		// eslint-disable-next-line no-param-reassign
		tooltip.style[d] = `translateX(-${position}%)`
	})

}

export default setSliderTooltip
