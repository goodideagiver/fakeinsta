import { getRandomName } from './data/Names.js';
import { getRandomSentence } from './data/Desc.js';
import { PostUtils } from './PostUtils.js';

export class RandomPost extends PostUtils {
	constructor() {
		super(getRandomName(), getRandomSentence(), (Math.random() * 1000000).toFixed(0));
	}

	async add() {
		const postImageURL = await this.fetchImage();
		const profileImageURL = await this.fetchImage();
		const appFeedHook = document.getElementById('app-content');

		const postEl = this.postTemplateEl;
		postEl.querySelector('.post-photo img').src = postImageURL;
		postEl.querySelector('.post-user-img img').src = profileImageURL;

		await appFeedHook.append(postEl);
	}
}
