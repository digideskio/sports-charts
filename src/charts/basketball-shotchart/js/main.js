import setupIframe from '../../../utils/setup-iframe'
import chart from './chart'

chart.setup()

const handleNewData = ({ averages, rows }, isChartbuilder) => {
	if (rows) chart.updateData({ averages, rows }, isChartbuilder)
}

const handleNewPayload = (payload) => {
	const { data, hed, isChartbuilder } = payload

	if (hed) document.querySelector('header h1').textContent = hed
	if (data) handleNewData(data, isChartbuilder)

}

// this starts the pym resizer and takes a callback.
// the callback will fire when we receive data
setupIframe({ handleNewPayload })
