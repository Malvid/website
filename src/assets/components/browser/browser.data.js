module.exports = {
	url: 'http://localhost:3000/',
	figure: {
		src: '/assets/images/browser.png',
		alternative: 'Browser'
	},
	points: [
		{
			x: 240,
			y: 20,
			delay: 0,
			tooltip: {
				position: 'top',
				bodytext: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
			}
		},
		{
			x: 20,
			y: 110,
			delay: .5,
			tooltip: {
				position: 'right',
				bodytext: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
			}
		}
	]
}