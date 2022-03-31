export class Gallery {
	#photoUrlArr = [];
	constructor() {
		this.galleryElement = document
			.getElementById('gallery-template')
			.content.cloneNode(true);

		this.initGallery();
	}

	createGalleryElement() {}

	show() {}

	hide() {}

	async initGallery() {
		//downloads photos, creates gallery element and shows gallery after element creation
		const start = performance.now();
		const photoUrlArray = await this.fetchGalleryPhotos();
		console.log(photoUrlArray);
		console.log(performance.now() - start);
		this.#photoUrlArr = photoUrlArray;
		this.show();
	}

	async createGalleryElementsArray() {
		const photos = await this.fetchGalleryPhotos();
		const photoElements = photos.map(photoUrl => {
			const photoEl = document.createElement('img');
			photoEl.src = photoUrl;
			return photoEl;
		});
	}

	async fetchImage(px = 150) {
		const resp = await fetch(`https://picsum.photos/${px}`);
		return resp.url;
	}

	async fetchGalleryPhotos() {
		const photos = [];
		for (let i = 0; i < 20; i++) {
			photos.push(await this.fetchImage(150));
		}
		return photos;
	}
}
