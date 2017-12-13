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
			bodytext: `
				<p>
					.<br>
					├── accordion<br>
					│   ├── accordion.data.json<br>
					│   └── accordion.njk<br>
					├── area<br>
					│   ├── area.data.json<br>
					│   └── area.njk<br>
					├── audio<br>
					│   ├── audio.config.json<br>
					│   ├── audio.data.json<br>
					│   ├── audio.md<br>
					│   └── audio.njk
				</p>
			`,
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
		},
		section_features: {
			header: 'Many features,<br><b>but only what matters.</b>',
			subheader: '',
			features: {
				content: [
					{
						type: 'narrow',
						content: {
							color: 'light',
							icon: {
								color: 'dark',
								icon: 'asterisk'
							},
							header: 'Flexible',
							bodytext: '<p>Malvid can be run from the command line or integrated into your project via its API. It works with any template engine and folder structure.</p>'
						}
					},
					{
						type: 'wide',
						content: {
							color: 'dark',
							icon: {
								color: 'light',
								icon: 'funnel'
							},
							header: '<s>Lost and</s> Found',
							bodytext: '<p>Instantly find what you are looking for. Filter all your components in real time. No matter if you are searching for a name, view, data or note.</p>',
							browser: {
								url: 'http://localhost:3000/',
								figure: {
									src: '/assets/images/browser.png',
									alternative: 'Screenshot of Malvid'
								}
							}
						}
					}
				]
			}
		}
	}
}