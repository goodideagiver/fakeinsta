import { Post } from '../post/Post.js';

export class PickPhoto {
	constructor(photoUrl) {
		this.photoUrl = photoUrl;
		this.initPickPhoto();
	}

	initPickPhoto() {
		this.pickPhotoEl = document
			.getElementById('pick-photo-template')
			.content.cloneNode(true);

		this.pickPhotoEl
			.querySelector('nav')
			.addEventListener('click', this.navHandler.bind(this));

		this.addPhotoToPickPhoto();
		document.getElementById('app').appendChild(this.pickPhotoEl);

		this.pickPhotoEl = document.querySelector('.pick-photo');
	}

	addPhotoToPickPhoto() {
		const photo = document.createElement('img');
		photo.src = this.photoUrl;
		this.pickPhotoEl.querySelector('.pick-photo-image').appendChild(photo);
	}

	navHandler(evt) {
		const clickedEl = evt.target;
		if (clickedEl.tagName === 'BUTTON') {
			if (clickedEl.classList.contains('cancel')) {
				this.hide();
			} else if (clickedEl.classList.contains('confirm')) {
				this.postPhoto();
			}
		}
	}

	postPhoto() {
		const desc = this.pickPhotoEl.querySelector('textarea').value;
		const postDesc = desc.trim() !== '' ? desc : undefined;
		new Post('Visitor', postDesc, this.photoUrl).addToFeed();
		this.hide();
	}

	hide() {
		this.pickPhotoEl.remove();
		this.pickPhotoEl = null;
		this.photoUrl = null;
	}
}
