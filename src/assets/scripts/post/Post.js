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
		return await resp.url;
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

		postEl.querySelector('.description').textContent = desc;
		postEl.querySelector('summary span').textContent =
			this.generateDescPeekString(desc);

		await appFeedHook.append(postEl);
	}
}
