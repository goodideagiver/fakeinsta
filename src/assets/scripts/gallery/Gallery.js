export class Gallery {
	constructor() {
		this.galleryElement = document
			.getElementById('gallery-template')
			.content.cloneNode(true);
	}

	initGallery() {}

	async fetchImage(px = 150) {
		const resp = await fetch(`https://picsum.photos/${px}`);
		return resp.url;
	}

	async fetchGalleryPhotos() {
		const photos = [];
		for (let i = 0; i < 20; i++) {
			photos.push(await this.fetchImage(150));
		}
	}
}
