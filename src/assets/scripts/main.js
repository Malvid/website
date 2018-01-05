import jump from 'jump.js'

import './_parallax'

document.querySelectorAll('a[href^="#"]').forEach((elem) => {

	elem.onclick = (e) => {

		const href = elem.getAttribute('href')
		const target = document.querySelector(href)

		jump(target, {
			duration: 500,
			a11y: true
		})

		e.preventDefault()
		e.stopPropagation()

	}

})