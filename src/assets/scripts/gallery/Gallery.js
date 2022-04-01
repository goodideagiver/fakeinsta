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

	hide() {}

	async initGallery() {
		this.#photoUrlArr = urlArray;
		const galleryEl = this.createGalleryElement();
		document.body.appendChild(galleryEl);
	}

	createGalleryElementsArray() {
		const photoElements = this.#photoUrlArr.map(photoUrl => {
			const photoEl = document.createElement('img');
			photoEl.src = photoUrl.href;
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
