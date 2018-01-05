module.exports = {
	content: {
		header: {
			logo: {
				header: 'Malvid'
			}
		},
		section_hero: {
			id: 'hero',
			header: 'Developing components.<br><b>The right way.</b>',
			subheader: 'Generate an interactive UI to develop, preview and document your components.',
			buttons: [
				{
					color: 'light',
					arrow: true,
					label: 'Live Demo',
					href: {
						value: '/ui',
						target: '_blank'
					}
				},
				{
					color: 'dark',
					arrow: false,
					label: 'Documentation',
					href: {
						value: 'https://github.com/comwrap/Malvid'
					}
				}
			],
			next: {
				id: 'explanation'
			}
		},
		section_explanation: {
			id: 'explanation',
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
					width: 1300,
					height: 688,
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
			id: 'features',
			header: 'Many features,<br><b>but only what matters.</b>',
			subheader: '',
			features: {
				content: [
					{
						type: 'narrow',
						content: {
							icon: {
								icon: 'asterisk'
							},
							header: 'Flexible',
							bodytext: '<p>Malvid can be run from the command line or integrated into your project via its API. It works with any template engine and folder structure.</p>'
						}
					},
					{
						type: 'wide',
						content: {
							icon: {
								icon: 'funnel'
							},
							header: '<s>Lost and</s> Found',
							bodytext: '<p>Instantly find what you are looking for. Filter all your components in real time. No matter if you are searching for a name, view, data or note.</p>',
							browser: {
								url: 'http://localhost:3000/',
								figure: {
									src: '/assets/images/browser.png',
									width: 1300,
									height: 688,
									alternative: 'Screenshot of Malvid'
								}
							}
						}
					},
					{
						type: 'narrow',
						content: {
							icon: {
								icon: 'flash'
							},
							header: 'Fast',
							bodytext: '<p>Malvid is written in Node.js and rendered via React to ensure a blazing fast generation and usage. Switch between components without a single reload.</p>'
						}
					},
					{
						type: 'narrow',
						content: {
							icon: {
								icon: 'tag'
							},
							header: 'Statuses',
							bodytext: `<p>Let your team know what's going on. Statuses help to understand the state of a component. Is this component ready? The status tells you.</p>`
						}
					},
					{
						type: 'narrow',
						content: {
							icon: {
								icon: 'upload'
							},
							header: 'Deployable',
							bodytext: '<p>Malvid exports static HTML, JS and CSS files. Host your UI anywhere simply by uploading the files to your server.</p>'
						}
					}
				]
			}
		},
		section_links: {
			id: 'links',
			header: '<b>Get started</b>',
			subheader: 'Want to get started with Malvid? Grab the source and documentation from GitHub or play with our ready-to-rock boilerplate.',
			links: {
				content: [
					{
						href: {
							value: '#'
						},
						icon: 'play',
						header: 'Get started',
						bodytext: 'This guide shows you how create your first components with Malvid.'
					},
					{
						href: {
							value: '#'
						},
						icon: 'document-text',
						header: 'Documentation',
						bodytext: 'Our documentation gives you a great example about the possibilities of malvid. It includes everything from the installation to the configuration.'
					},
					{
						href: {
							value: '#'
						},
						icon: 'code-download',
						header: 'Boilerplate',
						bodytext: 'A base for all your everyday web-projects: A HTML5 Boilerplate built upon Malvid and Rosid. JS (with Babel), SASS and Nunjucks can be used right out of the box.'
					}
				]
			}
		},
		section_footer: {
			id: 'footer',
			content: [
				{
					label: 'Imprint',
					href: {
						value: 'https://www.comwrap.com/impressum/'
					}
				},
				{
					label: 'Privacy Policy',
					href: {
						value: 'https://www.comwrap.com/datenschutz/'
					}
				}
			],
			copyright: '©2018 comwrap GmbH'
		}
	}
}