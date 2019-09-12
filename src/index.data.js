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
						mobile: false,
						href: {
							value: 'https://github.com/Malvid/Malvid/blob/master/docs/Get%20started.md'
						}
					},
					{
						label: 'Documentation',
						mobile: true,
						href: {
							value: 'https://github.com/Malvid/Malvid/blob/master/README.md'
						}
					},
					{
						label: 'Changelog',
						mobile: false,
						href: {
							value: 'https://github.com/Malvid/Malvid/blob/master/CHANGELOG.md'
						}
					}
				]
			},
			icon: {
				icon: 'github',
				href: {
					value: 'https://github.com/Malvid/Malvid'
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
						value: 'https://github.com/Malvid/Malvid'
					}
				}
			],
			shapes: {
				content: [
					{
						x: -127,
						y: 20,
						z: 0,
						width: 140,
						height: 220,
						background: 'black',
						color: 'white'
					},
					{
						x: 30,
						y: -142,
						z: -200,
						width: 240,
						height: 60,
						bodytext: '{{ subheader }}',
						background: 'white',
						color: 'main'
					},
					{
						x: -25,
						y: 26,
						z: 0,
						width: 220,
						height: 140,
						background: 'black',
						color: 'white'
					},
					{
						animation: 'high',
						level: 2,
						x: -33,
						y: 41,
						z: 0,
						width: 200,
						height: 60,
						bodytext: '{{ header }}',
						background: 'main',
						color: 'white'
					},
					{
						x: 166,
						y: 86,
						z: 0,
						width: 160,
						height: 140,
						background: 'black',
						color: 'white'
					},
					{
						x: -42,
						y: 209,
						z: 0,
						width: 240,
						height: 60,
						bodytext: '{{ bodytext }}',
						background: 'white',
						color: 'main'
					},
					{
						animation: 'low',
						x: -55,
						y: -32,
						z: 0,
						width: 60,
						height: 60,
						background: 'light',
						color: 'main'
					}
				]
			}
		},
		section_explanation: {
			id: 'explanation',
			header: 'A UI for your components.<br><b>Generated.</b>',
			subheader: 'Malvid analyses your folder structure and turns your files into a visual UI.',
			bodytext: `
				<p>
					.<br>
					├── arrow<br>
					│   ├── arrow.data.json<br>
					│   └── arrow.njk<br>
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
						delay: 0.4,
						tooltip: {
							position: 'right',
							bodytext: 'All your components in one place. Ordered and grouped.'
						}
					},
					{
						x: 290,
						y: 420,
						delay: 0.8,
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
					bodytext: 'Malvid allows us to work on multiple components at the same time. It keeps the team and project organized so we can add more logic without losing sight.',
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
						icon: 'tube',
						header: 'Easier to test',
						bodytext: '<p>Malvid allows you to test and debug isolated components aswell as sections or whole webpages.</p>'
					},
					{
						icon: 'heart',
						header: 'A workflow to love',
						bodytext: '<p>Life gets easier when everyone and everything works perfectly together. Malvid is the foundation for the workflow your team has been waiting for.</p>'
					},
					{
						icon: 'cloud',
						header: 'Easy to deploy',
						bodytext: '<p>Malvid exports static HTML, JS and CSS files. Host your UI anywhere simply by uploading the files to your server.</p>'
					},
					{
						icon: 'adjust',
						header: 'Adjustable to your needs',
						bodytext: '<p>No matter which templating language or folder structure you use, Malvid can be adjusted to display whatever you want.</p>'
					},
					{
						icon: 'bubble',
						header: 'Useful to reference',
						bodytext: '<p>Malvid offers a great visual reference to acceptance definition in agile methodologies. Everyone can see what you are talking about.</p>'
					}
				]
			}
		},
		section_usage: {
			id: 'explanation',
			header: 'Make code visual.<br><b>With your terminal.</b>',
			subheader: 'Malvid can be integrated into your project using its API or CLI. The CLI tool is located in the bin folder and allows you to run Malvid without adding JS files to your project.',
			steps: {
				content: [
					{
						index: 1,
						bodytext: `Execute Malvid using the CLI or using the API`
					},
					{
						index: 2,
						bodytext: `Malvid scans the folder you've specified and generates a static HTML output`
					},
					{
						index: 3,
						bodytext: `Open the generated site to view the UI`
					}
				]
			},
			terminal: {
				bodytext: `
					<p>
						electerious$ malvid<br>
						<br>
						<span class="tab"></span>Usage:<br>
						<br>
						<span class="tab"></span>malvid [command] [filenames] [options]<br>
						<br>
						<span class="tab"></span>Commands:<br>
						<br>
						<span class="tab"></span>html [filename]  output HTML for the UI<br>
						<span class="tab"></span>json [filename]  output JSON with component data<br>
						<br>
						<span class="tab"></span>Options:<br>
						<br>
						<span class="tab"></span>-V, --version  output the version number<br>
						<span class="tab"></span>-h, --help     output usage information<br>
						<br>
						<span class="tab"></span>Examples:<br>
						<br>
						<span class="tab"></span>$ malvid index.html index.html.json<br>
						<span class="tab"></span>$ malvid html index.html<br>
						<span class="tab"></span>$ malvid json index.html.json<span class="cursor"></span>
					</p>
				`
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
							value: 'https://github.com/Malvid/Malvid/blob/master/docs/Get%20started.md'
						},
						icon: 'play',
						header: 'Get started',
						bodytext: '<p>This guide shows you how to setup Malvid and how to create your first component.</p>'
					},
					{
						href: {
							value: 'https://github.com/Malvid/Malvid'
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
			copyright: '©2019 comwrap GmbH'
		}
	}
}