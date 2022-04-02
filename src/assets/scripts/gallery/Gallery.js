import { urlArray } from './ImageUrlList';

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

	show() {}

	hide() {
		console.log(this.galleryEl);
		this.galleryEl.remove();
		this.galleryEl = null;
	}

	pickPhoto(url) {
		console.log('picked photo url = ', url);
		this.hide();
	}

	async initGallery() {
		this.#photoUrlArr = urlArray;
		this.galleryEl = this.createGalleryElement();
		this.galleryEl
			.querySelector('button')
			.addEventListener('click', () => this.hide());
		document.getElementById('app').appendChild(this.galleryEl);
		this.galleryEl = document.querySelector('.gallery');
	}

	createGalleryElementsArray() {
		const photoElements = this.#photoUrlArr.map(photoUrl => {
			const photoEl = document.createElement('img');
			photoEl.src = photoUrl.href;
			photoEl.addEventListener('click', () => {
				this.pickPhoto(photoUrl);
			});
			return photoEl;
		});
		return photoElements;
	}

	// async fetchImage(px = 150) {
	// 	const resp = await fetch(`https://picsum.photos/${px}`);
	// 	return resp.url;
	// }

	// async fetchGalleryPhotos() {
	// 	const photos = [];
	// 	for (let i = 0; i < 20; i++) {
	// 		photos.push(await this.fetchImage(150));
	// 	}
	// 	return photos;
	// }
}
