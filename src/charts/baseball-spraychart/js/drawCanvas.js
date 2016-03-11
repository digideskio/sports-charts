import { select, selectAll } from 'd3-selection'

const drawCanvas = ({ canvas, detachedContainer }) => {

	const { width, height } = canvas

	const c = canvas.getContext('2d')

	// Store the current transformation matrix
	c.save()

	// Use the identity matrix while clearing the canvas
	c.setTransform(1, 0, 0, 1, 0, 0)
	c.clearRect(0, 0, width, height)

	// Restore the transform
	c.restore()

	const dataContainer = select(detachedContainer)

	dataContainer.selectAll('custom.circle').each(function() {

		const node = select(this)
		const cx = node.attr('cx')
		const cy = node.attr('cy')
		const r = node.attr('r')

		c.beginPath()

		c.arc(cx, cy, r, 0, 2 * Math.PI)
		c.fill()

		c.closePath()

	})

	// 	const node = d3.select(this)

	// 	const cx = node.attr('cx')
	// 	const cy = node.attr('cy')
	// 	const r = node.attr('r')
	// 	const fillStyle = node.attr('fillStyle')
	// 	const strokeStyle = node.attr('strokeStyle')
	// 	const opacity = node.attr('opacity')

	// 	// TODO: see whether this works on retina screens
	// 	// TODO: investigate most performant way of doing this
	// 	c.globalAlpha = opacity
	// 	c.beginPath()
	// 	c.arc(cx, cy, r, 0, 2 * Math.PI)

	// 	c.fillStyle = fillStyle
	// 	c.fill()

	// 	c.lineWidth = 1

	// 	c.strokeStyle = strokeStyle
	// 	c.stroke()

	// 	c.closePath()
	// })

}

export default drawCanvas
