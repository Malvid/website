import * as basicSlider from 'basicSlider'

const init = (elem) => {

	const mainElem = elem.querySelector('.quotes__main')
	const asideElem = elem.querySelector('.quotes__aside')

	const mainSlides = Array.prototype.map.call(mainElem.children, (elem) => elem.outerHTML)
	const asideSlides = Array.prototype.map.call(asideElem.children, (elem) => elem.outerHTML)

	const opts = {
		dots: false,
		arrows: false
	}

	const mainInstance = basicSlider.create(mainElem, mainSlides, opts)
	const asideInstance = basicSlider.create(asideElem, asideSlides, opts)

	const prevElems = elem.querySelectorAll('.quotes__arrow--prev')
	const nextElems = elem.querySelectorAll('.quotes__arrow--next')

	prevElems.forEach((elem) => {

		elem.onclick = () => {
			mainInstance.prev()
			asideInstance.prev()
		}

	})

	nextElems.forEach((elem) => {

		elem.onclick = () => {
			mainInstance.next()
			asideInstance.next()
		}

	})

}

document.querySelectorAll('.quotes').forEach(init)