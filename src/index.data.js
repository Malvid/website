module.exports = {
	title: 'Interactive UI for components',
	content: {
		header: {
			logo: {
				header: 'Malvid'
			},
			nav: {
				content: [
					{
						label: 'Get Started',
						href: {
							value: 'https://github.com/Malvid/Malvid/blob/master/docs/Get%20started.md'
						}
					},
					{
						label: 'Documentation',
						href: {
							value: 'https://github.com/Malvid/Malvid/blob/master/README.md'
						}
					},
					{
						label: 'Changelog',
						href: {
							value: 'https://github.com/Malvid/Malvid/blob/master/CHANGELOG.md'
						}
					}
				]
			},
			icon: {
				icon: 'github',
				href: {
					value: 'https://github.com/comwrap/Malvid'
				}
			}
		},
		section_hero: {
			id: 'hero',
			header: 'Developing components.<br><b>The right way.</b>',
			subheader: 'Generate an interactive UI to develop, preview and document web components.',
			buttons: [
				{
					color: 'main',
					label: 'Live Demo',
					href: {
						value: '/ui',
						target: '_blank'
					}
				},
				{
					color: 'dark',
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
					│   └── audio.njk<br>
					└── ...
				</p>
			`,
			window: {
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
		section_quotes: {
			content: [
				{
					bodytext: `Malvid changed the way we work at comwrap. It's the foundation and single source of truth for the project manager, designer, developer and client.`,
					author: {
						name: 'comwrap GmbH',
						description: 'Digital Enterprise Company',
						image: {
							src: '/assets/images/comwrap_logo.png',
							alternative: 'Logo of comwrap GmbH'
						}
					},
					position: {
						x: '75%',
						y: 'center'
					},
					image: {
						src: '/assets/images/comwrap_image.jpg',
						alternative: 'Placeholder'
					}
				},
				{
					bodytext: 'Connecting front-end and back-end can be a painful process. Malvid takes this pain away by separating the site into small, testable and reliable components.',
					author: {
						name: 'Electerious',
						description: 'Web designer and developer',
						image: {
							src: '/assets/images/electerious_logo.png',
							alternative: 'Logo of Electerious'
						}
					},
					position: {
						x: '75%',
						y: 'bottom'
					},
					image: {
						src: '/assets/images/electerious_image.jpg',
						alternative: 'Placeholder'
					}
				},
				{
					bodytext: '',
					author: {
						name: 'Setgraphic',
						description: 'Webdesign Frankfurt',
						image: {
							src: '/assets/images/setgraphic_logo.jpg',
							alternative: 'Logo of Setgraphic'
						}
					},
					position: {
						x: '45%',
						y: 'center'
					},
					image: {
						src: '/assets/images/setgraphic_image.jpg',
						alternative: 'Placeholder'
					}
				}
			]
		},
		section_features: {
			id: 'features',
			header: 'Many features,<br><b>but only what matters.</b>',
			features: {
				content: [
					{
						icon: 'flash',
						header: 'Faster to work with',
						bodytext: '<p>Malvid is written in Node.js and rendered via React to ensure a blazing fast generation and usage. Switch between components without a single reload.</p>'
					},
					{
						icon: 'bug',
						header: 'Easier to test',
						bodytext: '<p>Malvid allows you to test and debug isolated components aswell as sections or whole webpages.</p>'
					},
					{
						icon: 'heart',
						header: 'A workflow to love',
						bodytext: '<p>Malvid allows you to test and debug isolated components aswell as sections or whole webpages.</p>'
					},
					{
						icon: 'flash',
						header: 'Easy to deploy',
						bodytext: '<p>Malvid exports static HTML, JS and CSS files. Host your UI anywhere simply by uploading the files to your server.</p>'
					},
					{
						icon: 'bug',
						header: 'Adjustable to your needs',
						bodytext: '<p></p>'
					},
					{
						icon: 'heart',
						header: 'Useful to reference',
						bodytext: '<p>Malvid offers a great visual reference to acceptance definition in agile methodologies. Everyone can see what you are talking about.</p>'
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
							value: 'https://github.com/comwrap/Malvid/blob/master/docs/Get%20started.md'
						},
						icon: 'play',
						header: 'Get started',
						bodytext: '<p>This guide shows you how to setup Malvid and how to create your first component.</p>'
					},
					{
						href: {
							value: 'https://github.com/comwrap/Malvid'
						},
						icon: 'document-text',
						header: 'Documentation',
						bodytext: '<p>Our documentation gives you a great example about the possibilities of Malvid. It includes everything from the installation to the configuration.</p>'
					},
					{
						href: {
							value: 'https://github.com/electerious/Skeleton-Components'
						},
						icon: 'code-download',
						header: 'Boilerplate',
						bodytext: '<p>A base for all your everyday web-projects: A HTML5 Boilerplate built upon Malvid and Rosid. JS (with Babel), SASS and Nunjucks can be used right out of the box.</p>'
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