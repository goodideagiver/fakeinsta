import { urlArray } from './imageListURL';

export class Gallery {
	#photoUrlArr;
	constructor() {
		this.initGallery();
	}

	createGalleryElement() {
		const galleryTemplate = document
			.getElementById('gallery-template')
			.content.cloneNode(true);
		const galleryGrid = galleryTemplate.querySelector('.gallery-grid');

		this.addPhotosToGallery(this.createGalleryElementsArray(), galleryGrid);

		return galleryTemplate;
	}

	addPhotosToGallery(photosEls, galleryHook) {
		photosEls.forEach(photoEl => {
			galleryHook.appendChild(photoEl);
		});
	}

	hide() {
		this.galleryEl.remove();
		this.galleryEl = null;
	}

	pickPhoto(url) {
		import('../pickPhoto/PickPhoto.js')
			.then(photo => {
				new photo.PickPhoto(url);
				this.hide();
			})
			.catch(err => {
				console.error('there was problem when picking photo', err);
			});
	}

	async initGallery() {
		this.#photoUrlArr = urlArray;
		this.galleryEl = this.createGalleryElement();
		this.galleryEl
			.querySelector('button')
			.addEventListener('click', this.hide.bind(this));
		document.getElementById('app').appendChild(this.galleryEl);
		this.galleryEl = document.querySelector('.gallery');
	}

	createGalleryElementsArray() {
		const photoElements = this.#photoUrlArr.map(photoUrl => {
			const photoEl = document.createElement('img');
			photoEl.src = photoUrl.href;
			photoEl.addEventListener('click', () => this.pickPhoto(photoUrl));

			return photoEl;
		});
		return photoElements;
	}
}
