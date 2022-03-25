import { getRandomName } from './data/Names.js';
import { getRandomSentence } from './data/Desc.js';
export class Post {
	constructor(username, description, image) {
		this.postTemplateEl = document
			.getElementById('post-template')
			.content.cloneNode(true);
	}

	async fetchImage() {
		const resp = await fetch('https://picsum.photos/200');
		if (!resp.ok) {
			return new URL(
				'../../img/post/placeholder.jpg?as=webp&width=250',
				import.meta.url
			);
		}
		return resp.url;
	}

	generateDescPeekString(desc) {
		const arr = desc.split(' ');
		const peekArr = arr.map((sentence, id) => {
			if (id > 3) {
				return;
			} else {
				return sentence;
			}
		});
		return peekArr.join(' ').trim() + '...';
	}

	addHideDescButton(target) {
		const hideDesc = document.createElement('span');
		hideDesc.className = 'show-hide-btn-post';
		hideDesc.textContent = ' hide';
		hideDesc.addEventListener('click', () => {
			hideDesc.closest('details').open = false;
		});
		target.append(hideDesc);
	}

	async addRandomPost() {
		const postImageURL = await this.fetchImage();
		const profileImageURL = await this.fetchImage();
		const appFeedHook = document.getElementById('app-content');
		const username = getRandomName();

		const desc = getRandomSentence();

		const postEl = this.postTemplateEl.cloneNode(true);
		postEl.querySelector('.post-photo img').src = postImageURL;
		postEl.querySelector('.post-user-img img').src = profileImageURL;

		postEl.querySelector('.post-user-name').textContent = username;
		postEl.querySelector('.summary-username').textContent = username;
		postEl.querySelector('.details-username').textContent = username;

		const descEl = postEl.querySelector('.description');
		descEl.textContent = desc;
		this.addHideDescButton(descEl);

		postEl.querySelector('summary span').textContent =
			this.generateDescPeekString(desc);

		postEl.querySelector('.like-count span').textContent = (Math.random() * 1000000)
			.toFixed(0)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

		await appFeedHook.append(postEl);
	}
}
