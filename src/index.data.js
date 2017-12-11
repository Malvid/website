module.exports = {
	content: {
		header: {
			logo: {
				header: 'Malvid'
			}
		},
		section_hero: {
			header: 'Developing components.<br><b>The right way.</b>',
			subheader: 'Generate an interactive UI to develop, preview and document your components.',
			buttons: [
				{
					color: 'light',
					arrow: true,
					label: 'Live Demo'
				},
				{
					color: 'dark',
					arrow: false,
					label: 'Documentation'
				}
			]
		},
		section_explanation: {
			header: 'A UI for your components.<br><b>Generated.</b>',
			subheader: 'Malvid analyses your folder structure and turns your files into a visual UI.',
			bodytext: '',
			browser: {
				url: 'http://localhost:3000/',
				figure: {
					src: '/assets/images/browser.png',
					alternative: 'Screenshot of Malvid'
				},
				points: [
					{
						x: 240,
						y: 20,
						delay: 0,
						tooltip: {
							position: 'top',
							bodytext: 'Filter by multiple properties and find the component you are looking for.'
						}
					},
					{
						x: 20,
						y: 110,
						delay: .4,
						tooltip: {
							position: 'right',
							bodytext: 'All your components in one place. Ordered and grouped.'
						}
					},
					{
						x: 290,
						y: 420,
						delay: .8,
						tooltip: {
							position: 'left',
							bodytext: 'Your selected component at a glance: Template, data and notes.'
						}
					}
				]
			}
		}
	}
}